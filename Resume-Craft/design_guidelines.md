# Design Guidelines: Professional Resume Builder

## Design Approach: Design System - Material Design Inspired

**Justification**: This is a utility-focused productivity tool requiring clarity, efficiency, and professional output. Material Design principles provide the structured foundation needed for form-heavy applications while maintaining polish.

**Core Principles**:
- Professional credibility through clean typography and hierarchy
- Split-screen efficiency: Edit form + Live preview
- Document-first design language
- Minimal visual distractions to focus on content quality

---

## Typography

**Font Families**:
- Primary Interface: Inter (via Google Fonts) - clean, modern sans-serif for UI
- Resume Output: Source Sans Pro + Source Serif Pro - professional document pairing

**Hierarchy**:
- Page Titles: text-3xl font-bold (Interface sections like "Personal Information")
- Section Headers: text-xl font-semibold (Form sections)
- Resume Section Titles: text-2xl font-bold tracking-tight (Name, Experience headers)
- Resume Subsections: text-lg font-semibold (Job titles, project names)
- Body Text: text-base leading-relaxed (Form labels, resume content)
- Help Text: text-sm text-gray-500 (Form hints, character counts)
- Micro Copy: text-xs (Metadata, timestamps)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16 for consistent rhythm
- Component gaps: gap-4, gap-6
- Section padding: p-6, p-8
- Page margins: px-8, py-12
- Form field spacing: space-y-4
- Resume content spacing: space-y-6, space-y-8

**Page Structure**:
```
Two-Column Desktop Layout (lg:grid-cols-2):
- Left: Edit Form (fixed width, scrollable)
- Right: Live Preview (sticky, A4 aspect ratio)

Mobile: Single column, stacked (form above, preview below with toggle)
```

**Containers**:
- Main wrapper: max-w-screen-2xl mx-auto
- Form column: max-w-2xl with p-8
- Resume preview: max-w-[210mm] (A4 width) with aspect-[210/297]

---

## Component Library

### Navigation Bar
- Fixed top bar with app branding ("Resume Builder")
- Right-aligned actions: "Download PDF" primary button, "Save Draft" secondary
- Minimal height (h-16) to maximize content space
- Subtle border-bottom for definition

### Form Components

**Input Fields**:
- All inputs: rounded-lg border-2 focus:ring-2 focus:ring-offset-1
- Standard height: h-12 for text inputs
- Textarea: min-h-32 with resize-y capability
- Full width within form sections: w-full

**Field Groups**:
- Section cards: rounded-xl border shadow-sm p-6 space-y-4
- Labels: text-sm font-medium mb-1.5 block
- Character counters on descriptions: text-xs text-right mt-1
- Required indicators: text-red-500 after label

**Project & Experience Repeaters**:
- Card-based items with border-l-4 accent stripe
- "Add New" button: dashed border button with plus icon (Heroicons)
- Drag handles for reordering (optional nice-to-have)
- Delete action: text-red-500 with trash icon (top-right of card)

**Section Organization**:
1. Personal Information (Name, Contact, Location, LinkedIn)
2. Professional Summary
3. Technical Skills (Tag-based multi-select)
4. Projects (Repeater: Title, Description, Technologies, Duration)
5. Professional Experience (Repeater: Company, Role, Duration, Achievements)
6. Education (Repeater: Institution, Degree, Dates)
7. Languages & Additional Info

### Resume Preview Pane

**Container**:
- White background, shadow-2xl for paper effect
- Padding: p-12 to mimic document margins
- Sticky positioning: sticky top-24 to stay in view while editing

**Resume Layout** (matching "First Last" style):
- Name: Centered, text-4xl font-bold mb-2
- Contact bar: Centered, text-sm with pipe separators
- Sections: Left-aligned with clear hierarchy
- Date ranges: Right-aligned on same line as job/project titles using flex justify-between
- Bullet points: Proper indentation (pl-6) with custom bullet styling

**Professional Details**:
- Section dividers: border-t-2 mt-8 pt-6
- Consistent spacing: Resume sections use space-y-8 between major sections, space-y-3 within
- Skill tags: Inline badges with subtle backgrounds (not too colorful)

### Buttons
- Primary (Download PDF): px-6 py-3 rounded-lg font-semibold
- Secondary (Save Draft): px-4 py-2 rounded-md border-2
- Icon size: w-5 h-5 alongside text
- Use Heroicons: download, save, plus-circle, trash

### Icons
**Library**: Heroicons (outline style for UI, solid for emphasis)
- Download icon for PDF export
- Plus icon for adding items
- Trash icon for deletions
- Pencil icon for edit states
- Document icon for resume preview toggle (mobile)

---

## Responsive Behavior

**Desktop (lg+)**: Side-by-side form and preview
**Tablet (md)**: Single column with floating preview toggle button
**Mobile**: Stacked layout with tab switching between "Edit" and "Preview"

**Form Adaptations**:
- Grid inputs (like phone + email): grid-cols-1 md:grid-cols-2
- Reduce padding: Mobile uses p-4 vs desktop p-8

---

## Animations
**Minimal approach** - only functional feedback:
- Button hover: slight opacity change (no elaborate transitions)
- Form field focus: ring transition only
- NO scroll animations, NO slide-ins, NO parallax
- Save confirmation: Simple toast notification (fade in/out 300ms)

---

## Images
**Not applicable** - This is a document creation tool. No hero images or decorative photography needed. Focus remains on forms and preview.

---

## Key Interaction Patterns
- Auto-save draft every 30 seconds (with subtle indicator)
- Live preview updates as user types
- PDF generation uses browser print API with proper page breaks
- Form validation: Inline error messages (text-red-600 text-sm mt-1)
- Character limits visible but not restrictive (recommendations, not hard limits)