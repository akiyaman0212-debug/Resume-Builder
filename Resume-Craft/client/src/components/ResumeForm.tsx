import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, GripVertical } from "lucide-react";
import type { ResumeData, Experience, Project, Education } from "@/lib/resumeTypes";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  const [skillInput, setSkillInput] = useState("");

  const updatePersonalInfo = (field: keyof ResumeData["personalInfo"], value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      location: "",
      role: "",
      startDate: "",
      endDate: "",
      bullets: [""],
    };
    onChange({ ...data, experience: [...data.experience, newExp] });
  };

  const updateExperience = (id: string, field: keyof Experience, value: unknown) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const addProject = () => {
    const newProj: Project = {
      id: Date.now().toString(),
      name: "",
      technologies: [],
      bullets: [""],
    };
    onChange({ ...data, projects: [...data.projects, newProj] });
  };

  const updateProject = (id: string, field: keyof Project, value: unknown) => {
    onChange({
      ...data,
      projects: data.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const removeProject = (id: string) => {
    onChange({
      ...data,
      projects: data.projects.filter((proj) => proj.id !== id),
    });
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: "",
      location: "",
      degree: "",
      date: "",
      bullets: [],
    };
    onChange({ ...data, education: [...data.education, newEdu] });
  };

  const updateEducation = (id: string, field: keyof Education, value: unknown) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
      onChange({ ...data, skills: [...data.skills, skillInput.trim()] });
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    onChange({ ...data, skills: data.skills.filter((s) => s !== skill) });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              data-testid="input-name"
              value={data.personalInfo.name}
              onChange={(e) => updatePersonalInfo("name", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                data-testid="input-email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                data-testid="input-phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                placeholder="+1 234 567 890"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              data-testid="input-location"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
              placeholder="City, State, Country"
            />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              data-testid="input-linkedin"
              value={data.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
              placeholder="linkedin.com/in/username"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            data-testid="input-summary"
            value={data.summary}
            onChange={(e) => onChange({ ...data, summary: e.target.value })}
            placeholder="A brief summary of your professional background..."
            className="min-h-32"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle className="text-xl">Professional Experience</CardTitle>
          <Button size="sm" variant="outline" onClick={addExperience} data-testid="button-add-experience">
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.experience.map((exp) => (
            <div key={exp.id} className="border rounded-lg p-4 space-y-3 relative">
              <div className="absolute top-2 right-2 flex gap-1 items-center">
                <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeExperience(exp.id)}
                  data-testid={`button-remove-experience-${exp.id}`}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-16">
                <div>
                  <Label>Company</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                    placeholder="Company Name"
                    data-testid={`input-experience-company-${exp.id}`}
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                    placeholder="City, State"
                    data-testid={`input-experience-location-${exp.id}`}
                  />
                </div>
              </div>
              <div>
                <Label>Role</Label>
                <Input
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                  placeholder="Software Engineer"
                  data-testid={`input-experience-role-${exp.id}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    placeholder="Jan 2020"
                    data-testid={`input-experience-start-${exp.id}`}
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    placeholder="Present"
                    data-testid={`input-experience-end-${exp.id}`}
                  />
                </div>
              </div>
              <div>
                <Label>Bullet Points (one per line)</Label>
                <Textarea
                  value={exp.bullets.join("\n")}
                  onChange={(e) =>
                    updateExperience(exp.id, "bullets", e.target.value.split("\n"))
                  }
                  placeholder="Key achievement or responsibility..."
                  className="min-h-24"
                  data-testid={`input-experience-bullets-${exp.id}`}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle className="text-xl">Projects</CardTitle>
          <Button size="sm" variant="outline" onClick={addProject} data-testid="button-add-project">
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.projects.map((proj) => (
            <div key={proj.id} className="border rounded-lg p-4 space-y-3 relative">
              <div className="absolute top-2 right-2 flex gap-1 items-center">
                <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeProject(proj.id)}
                  data-testid={`button-remove-project-${proj.id}`}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
              <div className="pr-16">
                <Label>Project Name</Label>
                <Input
                  value={proj.name}
                  onChange={(e) => updateProject(proj.id, "name", e.target.value)}
                  placeholder="Project Name"
                  data-testid={`input-project-name-${proj.id}`}
                />
              </div>
              <div>
                <Label>Technologies (comma-separated)</Label>
                <Input
                  value={proj.technologies.join(", ")}
                  onChange={(e) =>
                    updateProject(
                      proj.id,
                      "technologies",
                      e.target.value.split(",").map((t) => t.trim())
                    )
                  }
                  placeholder="React, TypeScript, Node.js"
                  data-testid={`input-project-tech-${proj.id}`}
                />
              </div>
              <div>
                <Label>Bullet Points (one per line)</Label>
                <Textarea
                  value={proj.bullets.join("\n")}
                  onChange={(e) =>
                    updateProject(proj.id, "bullets", e.target.value.split("\n"))
                  }
                  placeholder="Key feature or achievement..."
                  className="min-h-24"
                  data-testid={`input-project-bullets-${proj.id}`}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <CardTitle className="text-xl">Education</CardTitle>
          <Button size="sm" variant="outline" onClick={addEducation} data-testid="button-add-education">
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="border rounded-lg p-4 space-y-3 relative">
              <div className="absolute top-2 right-2 flex gap-1 items-center">
                <GripVertical className="w-4 h-4 text-muted-foreground cursor-grab" />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => removeEducation(edu.id)}
                  data-testid={`button-remove-education-${edu.id}`}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-16">
                <div>
                  <Label>Institution</Label>
                  <Input
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                    placeholder="University Name"
                    data-testid={`input-education-institution-${edu.id}`}
                  />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                    placeholder="City, Country"
                    data-testid={`input-education-location-${edu.id}`}
                  />
                </div>
              </div>
              <div>
                <Label>Degree / Certificate</Label>
                <Input
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                  placeholder="Bachelor of Science in Computer Science"
                  data-testid={`input-education-degree-${edu.id}`}
                />
              </div>
              <div>
                <Label>Date</Label>
                <Input
                  value={edu.date}
                  onChange={(e) => updateEducation(edu.id, "date", e.target.value)}
                  placeholder="2020 - 2024"
                  data-testid={`input-education-date-${edu.id}`}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add a skill..."
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
              data-testid="input-skill"
            />
            <Button onClick={addSkill} data-testid="button-add-skill">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-sm rounded-md"
                data-testid={`skill-tag-${skill}`}
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-1 text-muted-foreground hover:text-foreground"
                  data-testid={`button-remove-skill-${skill}`}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Languages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {data.languages.map((lang, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-3">
              <div>
                <Label>Language</Label>
                <Input
                  value={lang.language}
                  onChange={(e) => {
                    const updated = [...data.languages];
                    updated[idx] = { ...updated[idx], language: e.target.value };
                    onChange({ ...data, languages: updated });
                  }}
                  placeholder="English"
                  data-testid={`input-language-${idx}`}
                />
              </div>
              <div>
                <Label>Level</Label>
                <Input
                  value={lang.level}
                  onChange={(e) => {
                    const updated = [...data.languages];
                    updated[idx] = { ...updated[idx], level: e.target.value };
                    onChange({ ...data, languages: updated });
                  }}
                  placeholder="Native / Fluent / Intermediate"
                  data-testid={`input-language-level-${idx}`}
                />
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              onChange({
                ...data,
                languages: [...data.languages, { language: "", level: "" }],
              })
            }
            data-testid="button-add-language"
          >
            <Plus className="w-4 h-4 mr-1" /> Add Language
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
