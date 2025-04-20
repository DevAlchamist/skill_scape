import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            Welcome to SkillScape AI. By accessing or using our platform, you agree
            to be bound by these terms and conditions.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. User Accounts</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            Users must register for an account to access most features. You are
            responsible for maintaining the confidentiality of your account
            information.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Content Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            Users are responsible for the content they create and share. Content
            must not violate any applicable laws or infringe on others' rights.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>4. Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            Our privacy policy explains how we collect, use, and protect your
            personal information. By using our platform, you agree to our privacy
            practices.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>5. Changes to Terms</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert">
          <p>
            We reserve the right to modify these terms at any time. Users will be
            notified of significant changes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}