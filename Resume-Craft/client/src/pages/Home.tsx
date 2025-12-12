import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Edit3 } from "lucide-react";
import ResumePreview from "@/components/ResumePreview";
import ResumeForm from "@/components/ResumeForm";
import { defaultResumeData, type ResumeData } from "@/lib/resumeTypes";
import html2canvas from "html2canvas";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `${resumeData.personalInfo.name.replace(/\s+/g, "_")}_Resume.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 h-16 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-semibold hidden sm:block">Resume Builder</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex md:hidden border rounded-lg overflow-hidden">
              <Button
                variant={activeTab === "edit" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("edit")}
                data-testid="button-tab-edit"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
              <Button
                variant={activeTab === "preview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("preview")}
                data-testid="button-tab-preview"
              >
                <FileText className="w-4 h-4" />
              </Button>
            </div>
            <Button onClick={handleDownloadPDF} data-testid="button-download-pdf">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto">
        <div className="hidden md:grid grid-cols-2 gap-0">
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-4rem)] border-r">
            <ResumeForm data={resumeData} onChange={setResumeData} />
          </div>
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-4rem)] bg-muted/30">
            <div className="sticky top-0">
              <ResumePreview ref={resumeRef} data={resumeData} />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          {activeTab === "edit" ? (
            <div className="p-4">
              <ResumeForm data={resumeData} onChange={setResumeData} />
            </div>
          ) : (
            <div className="p-4 bg-muted/30">
              <ResumePreview ref={resumeRef} data={resumeData} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
