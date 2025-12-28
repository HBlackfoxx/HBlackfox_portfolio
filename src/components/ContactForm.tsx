import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

type FormStatus = "idle" | "loading" | "success" | "error"

interface ContactFormProps {
  apiUrl: string
}

// Map API error messages to user-friendly messages
const getErrorMessage = (error: string): { title: string; description: string } => {
  const errorMap: Record<string, { title: string; description: string }> = {
    "Too many requests": {
      title: "Slow down!",
      description: "You've sent too many messages. Please wait a minute and try again.",
    },
    "Invalid email format": {
      title: "Invalid email",
      description: "Please enter a valid email address (e.g., name@example.com).",
    },
    "Name, email, and message are required": {
      title: "Missing information",
      description: "Please fill in your name, email, and message before sending.",
    },
    "Field too long": {
      title: "Message too long",
      description: "Please shorten your message. Maximum 5000 characters allowed.",
    },
    "Invalid request body": {
      title: "Something went wrong",
      description: "There was a problem with your submission. Please refresh and try again.",
    },
    "Failed to send message": {
      title: "Couldn't send message",
      description: "There was a server error. Please try again later.",
    },
  }

  // Check for network errors
  if (error.includes("Failed to fetch") || error.includes("NetworkError")) {
    return {
      title: "Connection error",
      description: "Unable to reach the server. Please check your internet connection.",
    }
  }

  return errorMap[error] || {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again later.",
  }
}

export function ContactForm({ apiUrl }: ContactFormProps) {
  const [status, setStatus] = React.useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = React.useState("")
  const formRef = React.useRef<HTMLFormElement>(null)

  // Auto-dismiss success message after 5 seconds
  React.useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(text || "Failed to send message")
      }

      setStatus("success")
      formRef.current?.reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  const errorInfo = status === "error" ? getErrorMessage(errorMessage) : null

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Have a question or want to work together? Send me a message!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                disabled={status === "loading"}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              disabled={status === "loading"}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              required
              disabled={status === "loading"}
            />
          </div>

          {status === "error" && errorInfo && (
            <Alert variant="destructive" onClose={() => setStatus("idle")}>
              <AlertTitle>{errorInfo.title}</AlertTitle>
              <AlertDescription>{errorInfo.description}</AlertDescription>
            </Alert>
          )}

          {status === "success" && (
            <Alert variant="success" onClose={() => setStatus("idle")}>
              <AlertTitle>Message sent!</AlertTitle>
              <AlertDescription>
                Thanks for reaching out! I'll get back to you as soon as possible.
              </AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
