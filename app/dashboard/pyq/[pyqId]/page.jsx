"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { db } from "@/utils/db";
import { Question } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    console.log(params.pyqId);
    getQuestionDetails();
  }, []);

  const getQuestionDetails = async () => {
    const result = await db
      .select()
      .from(Question)
      .where(eq(Question.mockId, params.pyqId));
    const rawJson = result[0].MockQuestionJsonResp;

    // Clean up possible code block markers
    let cleanedJson = rawJson
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    let questionData;
    try {
      questionData = JSON.parse(cleanedJson);
      setQuestionData(questionData);
    } catch (e) {
      alert("There was a problem loading the question data. Please contact support.");
      console.error("Invalid JSON:", cleanedJson, e);
      setQuestionData(null);
    }
  };

  const router = useRouter();

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this question?")) {
      await db.delete(Question).where(eq(Question.mockId, params.pyqId));
      alert("Question deleted.");
      router.push("/dashboard"); // or wherever you want to redirect after deletion
    }
  };


  return (
    questionData && (
    <div className="p-10 my-5">
      <Accordion type="single" collapsible>
        {questionData &&
          questionData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="mb-5"  >
              <AccordionTrigger>{item?.Question}?</AccordionTrigger>
              <AccordionContent>{item?.Answer}</AccordionContent>
              <Button onClick={handleDelete} variant="destructive">Delete</Button>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
    )
  );
};

export default page;
