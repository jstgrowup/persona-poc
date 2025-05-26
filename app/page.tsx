"use client";
import PersonaReact from "persona-react";
export default function Home() {
  console.log(
    "process.env.NEXT_PUBLIC_PERSONA_TEMPLATE:",
    process.env.NEXT_PUBLIC_PERSONA_TEMPLATE
  );
  return (
    <div>
      <PersonaReact
        templateId={process.env.NEXT_PUBLIC_PERSONA_TEMPLATE}
        environmentId={process.env.NEXT_PUBLIC_PERSONA_ENVIROMENT_ID}
        // This is for the webhook
        referenceId={"abcd"}
        onComplete={({ inquiryId, status }) => {
          console.log("status:", status);
          console.log("inquiryId:", inquiryId);
          // TODO: This will be handled in the webhook and will remove this hook call

          if (status === "completed") {
          }
        }}
      />
    </div>
  );
}
