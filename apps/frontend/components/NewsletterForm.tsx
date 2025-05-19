"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MailIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess('Thank you for subscribing! We\'ll send you our best travel deals soon.');
      setEmail('');
      setLoading(false);
    }, 1500);
  };

  return (
    <Card className="mx-auto max-w-lg bg-muted/30">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Get Travel Deals & Updates</CardTitle>
        <CardDescription>
          Subscribe to our newsletter and never miss our best offers, travel tips, and destination guides.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <MailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="pl-10"
              />
            </div>
            <Button 
              type="submit" 
              disabled={loading}
              className="sm:w-auto w-full"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          
          {error && (
            <Alert variant="destructive">
              <AlertCircleIcon className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {success && (
            <Alert className="bg-green-50 text-green-900 border-green-200">
              <CheckCircleIcon className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          
          <p className="text-xs text-muted-foreground text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive travel-related emails.
            You can unsubscribe at any time.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewsletterForm;
