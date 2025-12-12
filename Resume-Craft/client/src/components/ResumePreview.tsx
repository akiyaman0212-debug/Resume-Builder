import { forwardRef } from "react";
import type { ResumeData } from "@/lib/resumeTypes";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = forwardRef<HTMLDivElement, ResumePreviewProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black w-full max-w-[210mm] mx-auto shadow-2xl print:shadow-none"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="p-8 md:p-12 space-y-6">
          <header className="text-center border-b-2 border-black pb-4">
            <h1
              className="text-3xl md:text-4xl font-bold tracking-tight mb-2 uppercase"
              data-testid="text-resume-name"
            >
              {data.personalInfo.name}
            </h1>
            <p className="text-sm text-gray-700" data-testid="text-contact-info">
              {data.personalInfo.location} | {data.personalInfo.phone} |{" "}
              {data.personalInfo.email} | {data.personalInfo.linkedin}
            </p>
          </header>

          {data.summary && (
            <section>
              <p
                className="text-sm leading-relaxed text-gray-800 italic"
                data-testid="text-summary"
              >
                {data.summary}
              </p>
            </section>
          )}

          {data.experience.length > 0 && (
            <section>
              <h2 className="text-lg font-bold border-b border-black mb-3 pb-1 uppercase tracking-wide">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} data-testid={`experience-item-${exp.id}`}>
                    <div className="flex flex-wrap justify-between gap-2 items-baseline">
                      <div>
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-600">, {exp.location}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="font-medium text-gray-800">{exp.role}</p>
                    {exp.bullets.length > 0 && (
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.projects.length > 0 && (
            <section>
              <h2 className="text-lg font-bold border-b border-black mb-3 pb-1 uppercase tracking-wide">
                Projects
              </h2>
              <div className="space-y-4">
                {data.projects.map((proj) => (
                  <div key={proj.id} data-testid={`project-item-${proj.id}`}>
                    <div className="flex flex-wrap justify-between gap-2 items-baseline">
                      <span className="font-semibold">{proj.name}</span>
                      <span className="text-xs text-gray-500">
                        {proj.technologies.join(", ")}
                      </span>
                    </div>
                    {proj.bullets.length > 0 && (
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        {proj.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section>
              <h2 className="text-lg font-bold border-b border-black mb-3 pb-1 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id} data-testid={`education-item-${edu.id}`}>
                    <div className="flex flex-wrap justify-between gap-2 items-baseline">
                      <div>
                        <span className="font-semibold">{edu.institution}</span>
                        <span className="text-gray-600">, {edu.location}</span>
                      </div>
                      <span className="text-sm text-gray-600">{edu.date}</span>
                    </div>
                    <p className="text-sm text-gray-800">{edu.degree}</p>
                    {edu.bullets.length > 0 && (
                      <ul className="list-disc pl-5 mt-1 space-y-0.5">
                        {edu.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="text-lg font-bold border-b border-black mb-3 pb-1 uppercase tracking-wide">
              Skills & Other
            </h2>
            <div className="space-y-2">
              <p className="text-sm" data-testid="text-skills">
                <span className="font-semibold">Skills:</span>{" "}
                {data.skills.join(", ")}
              </p>
              {data.languages.length > 0 && (
                <p className="text-sm" data-testid="text-languages">
                  <span className="font-semibold">Languages:</span>{" "}
                  {data.languages
                    .map((l) => `${l.language} (${l.level})`)
                    .join(", ")}
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
);

ResumePreview.displayName = "ResumePreview";

export default ResumePreview;
