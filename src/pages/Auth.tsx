import React, { useState } from "react";
import { Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignIn, SignUp } from "@clerk/clerk-react";

export default function Auth() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="flex min-h-screen">
      {/* LEFT PANEL */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary items-center justify-center p-12">
        <div className="text-center">
          <Pill className="h-12 w-12 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">MediCare</h1>
          <p className="text-white/80 mt-2">Your trusted online pharmacy</p>
          <div className="space-y-4 text-left bg-primary-foreground/10 backdrop-blur rounded-xl p-6">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground/90">Order medicines & healthcare products</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground/90">Trusted brands & verified quality</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
              <span className="text-primary-foreground/90">Save your favorites</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex w-full items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-3">
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Sign in or create an account</CardDescription>
            <div className="flex justify-center gap-3">
              <Button variant={mode === "signin" ? "default" : "outline"} onClick={() => setMode("signin")}>
                Sign In
              </Button>
              <Button variant={mode === "signup" ? "default" : "outline"} onClick={() => setMode("signup")}>
                Sign Up
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {mode === "signin" ? (
              <SignIn routing="path" path="/auth" redirectUrl="/dashboard" signUpUrl="/auth" />
            ) : (
              <SignUp routing="path" path="/auth" redirectUrl="/dashboard" signInUrl="/auth" />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
