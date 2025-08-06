"use client";
import { db } from "@/utils/db";
import { Newsletter } from "@/utils/schema";
import { LoaderCircle } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";
import GradientText from "@/components/ui/gradient-text";
import AnimatedButton from "@/components/ui/animated-button";

const Contect = () => {
  const handleInputChange = (setState) => (e) => {
    setState(e.target.value);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(name, email, message);

    if (name && email && message) {
      setLoading(true);
      try {
        const resp = await db.insert(Newsletter).values({
          newName: name,
          newEmail: email,
          newMessage: message,
          createdAt: moment().format("YYYY-MM-DD"),
        });

        if (resp) {
          toast("User Response recorded successfully");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast("Error recording response");
        }
      } catch (error) {
        console.error(error);
        toast("Error recording response");
      } finally {
        setLoading(false);
      }
    } else {
      toast("No data entered");
    }
  };
  return (
    <div className="container mx-auto text-center animate-fadeIn">
      <h2 className="text-4xl font-bold"><GradientText gradient="primary-to-accent">Get In Touch</GradientText></h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Have any questions? Reach out to us and we'll get back to you as soon as
        possible.
      </p>
      <div className="mt-12">
        <form onSubmit={onSubmit} className="max-w-xl mx-auto bg-card p-8 rounded-xl shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleInputChange(setName)}
              className="w-full px-4 py-3 text-lg border border-input rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleInputChange(setEmail)}
              className="w-full px-4 py-3 text-lg border border-input rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={handleInputChange(setMessage)}
              className="w-full px-4 py-3 text-lg border border-input rounded-lg bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
              rows="4"
            />
          </div>
          <AnimatedButton
            type="submit"
            className="w-full px-6 py-4 text-lg font-semibold rounded-lg"
            withGradient
            withHoverScale
            size="lg"
          >
            {loading ? (
              <LoaderCircle className="animate-spin mx-auto" />
            ) : (
              "Send Message"
            )}
          </AnimatedButton>
        </form>
      </div>
    </div>
  );
};

export default Contect;
