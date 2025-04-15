"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Hey, I'm Ahmed! I'm a Full-Stack Developer with a passion for building
        web applications that are as smooth as they are powerful. Whether it's
        crafting beautiful, responsive interfaces or designing scalable back-end
        systems, I love turning ideas into reality with clean, efficient code.
        I've worked on educational platforms, project management tools, and
        business solutions, always striving to create seamless user experiences.
        My tech stack includes Next.js, React, Tailwind CSS, JavaScript,
        TypeScript, Node.js, Express.js, and MongoDB, but I'm always exploring
        new tools to stay ahead. Beyond coding, I thrive in collaborative
        environments where ideas flow freely, challenges fuel innovation, and
        every project is an opportunity to grow. If you're looking for a
        developer who's passionate, driven, and always ready to tackle the
        next big thing—let's connect!
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
