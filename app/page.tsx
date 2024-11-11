"use client";
import MyParagraphAnimation from "@/components/MyParagraphAnimation";
import MyWordAnimation from "@/components/MyWordAnimation";

const paragraph: string =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quidem dicta in ut, sapiente eius rerum quo adipisci vero asperiores corrupti dignissimos illo suscipit quisquam laboriosam dolores voluptatum quod praesentium.";

export default function Home() {
  return (
    <main className="bg-black">
      <div className="h-screen"></div>
      {/* Paragraph Component */}
      <MyParagraphAnimation paragraph={paragraph} />
      <div className="h-screen"></div>
      <MyWordAnimation paragraph={paragraph} />
      <div className="h-screen"></div>
    </main>
  );
}
