import Database from "better-sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "eventhub.sqlite");
export const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    count INTEGER DEFAULT 0,
    date TEXT NOT NULL,
    domArtificial Intelligencen TEXT NOT NULL
  );
`);

const row = db.prepare("SELECT COUNT(*) as count FROM events").get() as {
  count: number;
};
const count = row.count;
if (count === 0) {
  const insert = db.prepare(
    "INSERT INTO events (title, count, date, domArtificial Intelligencen) VALUES (?, ?, ?, ?)"
  );

  insert.run(
    "Artificial Intelligence & ML Conference",
    950,
    "2025-10-05",
    "Artificial Intelligence"
  );
  insert.run("Next.js Workshop", 740, "2025-08-28", "Web Development");
  insert.run("Docker Deep Dive", 620, "2025-11-15", "DevOps");
  insert.run("Cloud Native Day", 510, "2025-12-03", "Cloud");
  insert.run("Startup Pitch Night", 300, "2025-09-20", "Entrepreneurship");
  insert.run("Marketing Meetup", 200, "2025-10-10", "Marketing");
  insert.run("Design Thinking Workshop", 210, "2025-10-12", "Design");
  insert.run("Product Management Bootcamp", 180, "2025-10-13", "Product");
  insert.run("Cybersecurity Essentials", 330, "2025-10-14", "Security");
  insert.run("Data Science Expo", 410, "2025-10-15", "Data Science");
  insert.run("Mobile App Hackathon", 520, "2025-10-16", "Mobile");
  insert.run(
    "Artificial Intelligence for Healthcare",
    305,
    "2025-10-17",
    "Artificial Intelligence"
  );
  insert.run("Cloud Security Summit", 275, "2025-10-18", "Cloud");
  insert.run("Startup Funding 101", 190, "2025-10-19", "Entrepreneurship");
  insert.run("Marketing Automation Day", 260, "2025-10-20", "Marketing");
  insert.run("UI/UX Design Sprint", 340, "2025-10-21", "Design");
  insert.run("Agile Transformation", 295, "2025-10-22", "Product");
  insert.run("Ethical Hacking Meetup", 370, "2025-10-23", "Security");
  insert.run("Big Data Analytics", 430, "2025-10-24", "Data Science");
  insert.run("React Native Camp", 480, "2025-10-25", "Mobile");
  insert.run(
    "Artificial Intelligence Ethics Panel",
    210,
    "2025-10-26",
    "Artificial Intelligence"
  );
  insert.run("Serverless Conference", 320, "2025-10-27", "Cloud");
  insert.run("Startup Legal Basics", 150, "2025-10-28", "Entrepreneurship");
  insert.run("Branding Bootcamp", 220, "2025-10-29", "Marketing");
  insert.run("Design Systems Day", 310, "2025-10-30", "Design");
  insert.run("Lean Product Meetup", 275, "2025-10-31", "Product");
  insert.run("Network Security Forum", 360, "2025-11-01", "Security");
  insert.run("Machine Learning Summit", 420, "2025-11-02", "Data Science");
  insert.run("Flutter Dev Fest", 510, "2025-11-03", "Mobile");
  insert.run(
    "Artificial Intelligence in Finance",
    305,
    "2025-11-04",
    "Artificial Intelligence"
  );
  insert.run("Cloud Migration Day", 270, "2025-11-05", "Cloud");
  insert.run("Startup Pitch Practice", 180, "2025-11-06", "Entrepreneurship");
  insert.run("Content Marketing Expo", 260, "2025-11-07", "Marketing");
  insert.run("Design for Accessibility", 330, "2025-11-08", "Design");
  insert.run("Product Roadmap Workshop", 290, "2025-11-09", "Product");
  insert.run("Penetration Testing 101", 350, "2025-11-10", "Security");
  insert.run("Deep Learning Day", 400, "2025-11-11", "Data Science");
  insert.run("Kotlin Mobile Meetup", 470, "2025-11-12", "Mobile");
  insert.run(
    "Artificial Intelligence Startups Panel",
    220,
    "2025-11-13",
    "Artificial Intelligence"
  );
  insert.run("Hybrid Cloud Expo", 310, "2025-11-14", "Cloud");
  insert.run("Startup Growth Hacking", 200, "2025-11-15", "Entrepreneurship");
  insert.run("Digital Marketing Trends", 250, "2025-11-16", "Marketing");
  insert.run("DesignOps Conference", 320, "2025-11-17", "Design");
  insert.run("Product Metrics Bootcamp", 280, "2025-11-18", "Product");
  insert.run("Cloud Security Bootcamp", 340, "2025-11-19", "Security");
  insert.run("Data Visualization Day", 390, "2025-11-20", "Data Science");
  insert.run("Swift Mobile Summit", 450, "2025-11-21", "Mobile");
  insert.run(
    "Artificial Intelligence in RetArtificial Intelligencel",
    230,
    "2025-11-22",
    "Artificial Intelligence"
  );
  insert.run("Cloud Native Meetup", 320, "2025-11-23", "Cloud");
  insert.run("Startup Team Building", 170, "2025-11-24", "Entrepreneurship");
  insert.run("SEO Masterclass", 240, "2025-11-25", "Marketing");
  insert.run("Design Portfolio Review", 310, "2025-11-26", "Design");
  insert.run("Product Launch Day", 270, "2025-11-27", "Product");
  insert.run("Incident Response Panel", 330, "2025-11-28", "Security");
  insert.run("Data Engineering Meetup", 380, "2025-11-29", "Data Science");
  insert.run("Android Dev Camp", 440, "2025-11-30", "Mobile");
  insert.run(
    "Artificial Intelligence for Social Good",
    210,
    "2025-12-01",
    "Artificial Intelligence"
  );
  insert.run("Cloud Cost Optimization", 300, "2025-12-02", "Cloud");
  insert.run("Startup Branding 101", 160, "2025-12-03", "Entrepreneurship");
  insert.run(
    "EmArtificial Intelligencel Marketing Bootcamp",
    230,
    "2025-12-04",
    "Marketing"
  );
  insert.run("Design Critique Night", 300, "2025-12-05", "Design");
  insert.run("Product Feedback Forum", 260, "2025-12-06", "Product");
  insert.run("Security Awareness Day", 320, "2025-12-07", "Security");
  insert.run("Data Science for Business", 370, "2025-12-08", "Data Science");
  insert.run("Mobile UX Meetup", 420, "2025-12-09", "Mobile");
  insert.run(
    "Artificial Intelligence in Education",
    215,
    "2025-12-10",
    "Artificial Intelligence"
  );
  insert.run("Cloud DevOps Day", 310, "2025-12-11", "Cloud");
  insert.run(
    "Startup FundrArtificial Intelligencesing",
    180,
    "2025-12-12",
    "Entrepreneurship"
  );
  insert.run("Social Media Marketing", 250, "2025-12-13", "Marketing");
  insert.run("Design Sprint Workshop", 320, "2025-12-14", "Design");
  insert.run("Product Strategy Day", 280, "2025-12-15", "Product");
  insert.run("Application Security Expo", 340, "2025-12-16", "Security");
  insert.run("Data Mining Meetup", 390, "2025-12-17", "Data Science");
  insert.run("React Native Night", 450, "2025-12-18", "Mobile");
  insert.run(
    "Artificial Intelligence for Startups",
    225,
    "2025-12-19",
    "Artificial Intelligence"
  );
  insert.run("Cloud Automation Summit", 315, "2025-12-20", "Cloud");
  insert.run("Startup Legal Clinic", 165, "2025-12-21", "Entrepreneurship");
  insert.run("Influencer Marketing", 235, "2025-12-22", "Marketing");
  insert.run("Design Jam", 305, "2025-12-23", "Design");
  insert.run("Product Growth Meetup", 265, "2025-12-24", "Product");
  insert.run("Zero Trust Security", 325, "2025-12-25", "Security");
  insert.run("Data Science Bootcamp", 375, "2025-12-26", "Data Science");
  insert.run("Mobile App Launch", 425, "2025-12-27", "Mobile");
  insert.run(
    "Artificial Intelligence in Logistics",
    235,
    "2025-12-28",
    "Artificial Intelligence"
  );
  insert.run("Cloud Networking Day", 320, "2025-12-29", "Cloud");
  insert.run("Startup Demo Day", 175, "2025-12-30", "Entrepreneurship");
  insert.run("Content Strategy Expo", 245, "2025-12-31", "Marketing");
  insert.run("Design for Mobile", 315, "2026-01-01", "Design");
  insert.run("Product Innovation Forum", 275, "2026-01-02", "Product");
  insert.run("Security Operations Meetup", 335, "2026-01-03", "Security");
  insert.run("Data Science Night", 385, "2026-01-04", "Data Science");
  insert.run("Mobile Testing Camp", 435, "2026-01-05", "Mobile");
  insert.run(
    "Artificial Intelligence for Marketing",
    245,
    "2026-01-06",
    "Artificial Intelligence"
  );
  insert.run("Cloud Security Night", 325, "2026-01-07", "Cloud");
  insert.run("Startup Networking", 185, "2026-01-08", "Entrepreneurship");
  insert.run("Performance Marketing", 255, "2026-01-09", "Marketing");
  insert.run("Design Meetup", 325, "2026-01-10", "Design");
  insert.run("Product Design Day", 285, "2026-01-11", "Product");
  insert.run("Security Best Practices", 345, "2026-01-12", "Security");
  insert.run("Data Science Trends", 395, "2026-01-13", "Data Science");
  insert.run("Mobile App Security", 445, "2026-01-14", "Mobile");
  insert.run(
    "Artificial Intelligence for Good",
    255,
    "2026-01-15",
    "Artificial Intelligence"
  );
  insert.run("Cloud Native Bootcamp", 330, "2026-01-16", "Cloud");
  insert.run("Startup Success Stories", 195, "2026-01-17", "Entrepreneurship");
  insert.run("Brand Marketing", 265, "2026-01-18", "Marketing");
  insert.run("Design for Web", 335, "2026-01-19", "Design");
  insert.run("Product Launchpad", 295, "2026-01-20", "Product");
  insert.run("Security Panel", 355, "2026-01-21", "Security");
  insert.run("Data Science Meetup", 405, "2026-01-22", "Data Science");
  insert.run("Mobile App Design", 455, "2026-01-23", "Mobile");
  insert.run(
    "Artificial Intelligence in Healthcare",
    265,
    "2026-01-24",
    "Artificial Intelligence"
  );
  insert.run("Cloud Engineering Day", 335, "2026-01-25", "Cloud");
  insert.run("Startup Pitch Night 2", 205, "2026-01-26", "Entrepreneurship");
  insert.run("Digital Marketing Bootcamp", 275, "2026-01-27", "Marketing");
  insert.run("UI/UX Design Conference", 540, "2026-05-07", "Design");
  insert.run("Product Management Summit", 370, "2026-05-08", "Product");
  insert.run("Security Awareness Bootcamp", 410, "2026-05-09", "Security");
  insert.run("Data Science for Startups", 490, "2026-05-10", "Data Science");
  insert.run("Mobile App Creators Meetup", 550, "2026-05-11", "Mobile");
  insert.run(
    "Artificial Intelligence in Retail",
    375,
    "2026-05-12",
    "Artificial Intelligence"
  );
  insert.run("Cloud Transformation Day", 440, "2026-05-13", "Cloud");
  insert.run(
    "Entrepreneurship Essentials",
    280,
    "2026-05-14",
    "Entrepreneurship"
  );
  insert.run("Marketing Analytics Workshop", 355, "2026-05-15", "Marketing");
  insert.run("Design Thinking Jam", 415, "2026-05-16", "Design");
  insert.run("Product Roadmap Planning", 385, "2026-05-17", "Product");
  insert.run("Security for Developers", 455, "2026-05-18", "Security");
  insert.run("Data Science in Healthcare", 505, "2026-05-19", "Data Science");
  insert.run("Mobile UX/UI Night", 555, "2026-05-20", "Mobile");
  insert.run("AI for Business", 365, "2026-05-21", "Artificial Intelligence");
  insert.run("Cloud Security Essentials", 435, "2026-05-22", "Cloud");
  insert.run("Startup Pitch Bootcamp", 295, "2026-05-23", "Entrepreneurship");
  insert.run("Content Marketing Mastery", 375, "2026-05-24", "Marketing");
  insert.run("Design for Accessibility", 425, "2026-05-25", "Design");
  insert.run("Product Innovation Day", 395, "2026-05-26", "Product");
  insert.run("Security Operations Day", 465, "2026-05-27", "Security");
  insert.run("Data Science for Marketing", 515, "2026-05-28", "Data Science");
  insert.run("Mobile App Growth", 565, "2026-05-29", "Mobile");
  insert.run("AI in Education", 375, "2026-05-30", "Artificial Intelligence");
  insert.run("Cloud Automation Workshop", 445, "2026-05-31", "Cloud");
  insert.run(
    "Entrepreneurship Networking",
    305,
    "2026-06-01",
    "Entrepreneurship"
  );
  insert.run("Digital Marketing Bootcamp", 385, "2026-06-02", "Marketing");
  insert.run("Design Sprint Night", 435, "2026-06-03", "Design");
  insert.run("Product Launch Workshop", 405, "2026-06-04", "Product");
  insert.run("Security Panel Discussion", 475, "2026-06-05", "Security");
  insert.run("Data Science Trends", 525, "2026-06-06", "Data Science");
  insert.run("Mobile App Security", 575, "2026-06-07", "Mobile");
  insert.run(
    "AI for Social Good",
    385,
    "2026-06-08",
    "Artificial Intelligence"
  );
  insert.run("Cloud Native Summit", 455, "2026-06-09", "Cloud");
  insert.run("Startup Success Stories", 315, "2026-06-10", "Entrepreneurship");
  insert.run("Brand Marketing Expo", 395, "2026-06-11", "Marketing");
  insert.run("Design for Web", 445, "2026-06-12", "Design");
  insert.run("Product Launchpad", 415, "2026-06-13", "Product");
  insert.run("Security Best Practices", 485, "2026-06-14", "Security");
  insert.run("Data Science Meetup", 535, "2026-06-15", "Data Science");
  insert.run("Mobile App Design", 585, "2026-06-16", "Mobile");
  insert.run("AI in Healthcare", 395, "2026-06-17", "Artificial Intelligence");
  insert.run("Cloud Engineering Bootcamp", 465, "2026-06-18", "Cloud");
  insert.run("Startup Pitch Night 5", 325, "2026-06-19", "Entrepreneurship");
  insert.run("Performance Marketing Day", 405, "2026-06-20", "Marketing");
  insert.run("Design Meetup", 455, "2026-06-21", "Design");
  insert.run("Product Design Day", 425, "2026-06-22", "Product");
  insert.run("Security Awareness Summit", 495, "2026-06-23", "Security");
  insert.run("Data Science Bootcamp", 545, "2026-06-24", "Data Science");
  insert.run("Mobile App Launch", 595, "2026-06-25", "Mobile");
  insert.run("AI for Startups", 405, "2026-06-26", "Artificial Intelligence");
  insert.run("Cloud Networking Day", 475, "2026-06-27", "Cloud");
  insert.run("Startup Demo Day", 335, "2026-06-28", "Entrepreneurship");
  insert.run("Content Strategy Expo", 415, "2026-06-29", "Marketing");
  insert.run("Design for Mobile", 465, "2026-06-30", "Design");
  insert.run("Product Innovation Forum", 435, "2026-07-01", "Product");
  insert.run("Security Operations Meetup", 505, "2026-07-02", "Security");
  insert.run("Data Science Night", 555, "2026-07-03", "Data Science");
  insert.run("Mobile Testing Camp", 605, "2026-07-04", "Mobile");
  insert.run("AI for Marketing", 415, "2026-07-05", "Artificial Intelligence");
  insert.run("Cloud Security Night", 485, "2026-07-06", "Cloud");
  insert.run("Startup Networking", 345, "2026-07-07", "Entrepreneurship");
  insert.run("Performance Marketing", 425, "2026-07-08", "Marketing");
  insert.run("Design Jam", 475, "2026-07-09", "Design");
  insert.run("Product Growth Meetup", 445, "2026-07-10", "Product");
  insert.run("Zero Trust Security", 515, "2026-07-11", "Security");
  insert.run("Data Science Bootcamp 2", 565, "2026-07-12", "Data Science");
  insert.run("Mobile App Launch 2", 615, "2026-07-13", "Mobile");
  insert.run("AI in Logistics", 425, "2026-07-14", "Artificial Intelligence");
  insert.run("Cloud Automation Summit", 495, "2026-07-15", "Cloud");
  insert.run("Startup Legal Clinic", 355, "2026-07-16", "Entrepreneurship");
  insert.run("Influencer Marketing", 435, "2026-07-17", "Marketing");
  insert.run("Design Portfolio Review", 485, "2026-07-18", "Design");
  insert.run("Product Feedback Forum", 455, "2026-07-19", "Product");
  insert.run("Security Awareness Day", 525, "2026-07-20", "Security");
  insert.run("Data Science for Business", 575, "2026-07-21", "Data Science");
  insert.run("Mobile UX Meetup", 625, "2026-07-22", "Mobile");
  insert.run("AI in Education", 435, "2026-07-23", "Artificial Intelligence");
  insert.run("Cloud DevOps Day", 505, "2026-07-24", "Cloud");
  insert.run("Startup Fundraising", 365, "2026-07-25", "Entrepreneurship");
  insert.run("Social Media Marketing", 435, "2026-07-26", "Marketing");
  insert.run("Design Sprint Workshop", 495, "2026-07-27", "Design");
  insert.run("Product Strategy Day", 465, "2026-07-28", "Product");
  insert.run("Application Security Expo", 535, "2026-07-29", "Security");
  insert.run("Data Mining Meetup", 585, "2026-07-30", "Data Science");
  insert.run("React Native Night", 635, "2026-07-31", "Mobile");
  insert.run("AI for Good", 445, "2026-08-01", "Artificial Intelligence");
  insert.run("Cloud Native Bootcamp", 515, "2026-08-02", "Cloud");
  insert.run("Startup Success Stories", 375, "2026-08-03", "Entrepreneurship");
  insert.run("Brand Marketing", 445, "2026-08-04", "Marketing");
  insert.run("Design for Web", 495, "2026-08-05", "Design");
  insert.run("Product Launchpad", 465, "2026-08-06", "Product");
  insert.run("Security Panel", 535, "2026-08-07", "Security");
  insert.run("Data Science Meetup", 585, "2026-08-08", "Data Science");
  insert.run("Mobile App Design", 635, "2026-08-09", "Mobile");
  insert.run("AI in Healthcare", 455, "2026-08-10", "Artificial Intelligence");
  insert.run("Cloud Engineering Day", 525, "2026-08-11", "Cloud");
  insert.run("Startup Pitch Night 6", 385, "2026-08-12", "Entrepreneurship");
  insert.run("Digital Marketing Bootcamp", 455, "2026-08-13", "Marketing");
  insert.run("UI/UX Design Conference", 540, "2026-05-07", "Design");
  insert.run("Product Management Summit", 370, "2026-05-08", "Product");
  insert.run("Security Awareness Bootcamp", 410, "2026-05-09", "Security");
  insert.run("Data Science for Startups", 490, "2026-05-10", "Data Science");
  insert.run("Mobile App Creators Meetup", 550, "2026-05-11", "Mobile");
  insert.run(
    "Artificial Intelligence in Retail",
    375,
    "2026-05-12",
    "Artificial Intelligence"
  );
  insert.run("Cloud Transformation Day", 440, "2026-05-13", "Cloud");
  insert.run(
    "Entrepreneurship Essentials",
    280,
    "2026-05-14",
    "Entrepreneurship"
  );
  insert.run("Marketing Analytics Workshop", 355, "2026-05-15", "Marketing");
  insert.run("Design Thinking Jam", 415, "2026-05-16", "Design");
  insert.run("Product Roadmap Planning", 385, "2026-05-17", "Product");
  insert.run("Security for Developers", 455, "2026-05-18", "Security");
  insert.run("Data Science in Healthcare", 505, "2026-05-19", "Data Science");
  insert.run("Mobile UX/UI Night", 555, "2026-05-20", "Mobile");
  insert.run("AI for Business", 365, "2026-05-21", "Artificial Intelligence");
  insert.run("Cloud Security Essentials", 435, "2026-05-22", "Cloud");
  insert.run("Startup Pitch Bootcamp", 295, "2026-05-23", "Entrepreneurship");
  insert.run("Content Marketing Mastery", 375, "2026-05-24", "Marketing");
  insert.run("Design for Accessibility", 425, "2026-05-25", "Design");
  insert.run("Product Innovation Day", 395, "2026-05-26", "Product");
  insert.run("Security Operations Day", 465, "2026-05-27", "Security");
  insert.run("Data Science for Marketing", 515, "2026-05-28", "Data Science");
  insert.run("Mobile App Growth", 565, "2026-05-29", "Mobile");
  insert.run("AI in Education", 375, "2026-05-30", "Artificial Intelligence");
  insert.run("Cloud Automation Workshop", 445, "2026-05-31", "Cloud");
  insert.run(
    "Entrepreneurship Networking",
    305,
    "2026-06-01",
    "Entrepreneurship"
  );
  insert.run("Digital Marketing Bootcamp", 385, "2026-06-02", "Marketing");
  insert.run("Design Sprint Night", 435, "2026-06-03", "Design");
  insert.run("Product Launch Workshop", 405, "2026-06-04", "Product");
  insert.run("Security Panel Discussion", 475, "2026-06-05", "Security");
  insert.run("Data Science Trends", 525, "2026-06-06", "Data Science");
  insert.run("Mobile App Security", 575, "2026-06-07", "Mobile");
  insert.run(
    "AI for Social Good",
    385,
    "2026-06-08",
    "Artificial Intelligence"
  );
  insert.run("Cloud Native Summit", 455, "2026-06-09", "Cloud");
  insert.run("Startup Success Stories", 315, "2026-06-10", "Entrepreneurship");
  insert.run("Brand Marketing Expo", 395, "2026-06-11", "Marketing");
  insert.run("Design for Web", 445, "2026-06-12", "Design");
  insert.run("Product Launchpad", 415, "2026-06-13", "Product");
  insert.run("Security Best Practices", 485, "2026-06-14", "Security");
  insert.run("Data Science Meetup", 535, "2026-06-15", "Data Science");
  insert.run("Mobile App Design", 585, "2026-06-16", "Mobile");
  insert.run("AI in Healthcare", 395, "2026-06-17", "Artificial Intelligence");
  insert.run("Cloud Engineering Bootcamp", 465, "2026-06-18", "Cloud");
  insert.run("Startup Pitch Night 5", 325, "2026-06-19", "Entrepreneurship");
  insert.run("Performance Marketing Day", 405, "2026-06-20", "Marketing");
  insert.run("Design Meetup", 455, "2026-06-21", "Design");
  insert.run("Product Design Day", 425, "2026-06-22", "Product");
  insert.run("Security Awareness Summit", 495, "2026-06-23", "Security");
  insert.run("Data Science Bootcamp", 545, "2026-06-24", "Data Science");
  insert.run("Mobile App Launch", 595, "2026-06-25", "Mobile");
  insert.run("AI for Startups", 405, "2026-06-26", "Artificial Intelligence");
  insert.run("Cloud Networking Day", 475, "2026-06-27", "Cloud");
  insert.run("Startup Demo Day", 335, "2026-06-28", "Entrepreneurship");
  insert.run("Content Strategy Expo", 415, "2026-06-29", "Marketing");
  insert.run("Design for Mobile", 465, "2026-06-30", "Design");
  insert.run("Product Innovation Forum", 435, "2026-07-01", "Product");
  insert.run("Security Operations Meetup", 505, "2026-07-02", "Security");
  insert.run("Data Science Night", 555, "2026-07-03", "Data Science");
  insert.run("Mobile Testing Camp", 605, "2026-07-04", "Mobile");
  insert.run("AI for Marketing", 415, "2026-07-05", "Artificial Intelligence");
  insert.run("Cloud Security Night", 485, "2026-07-06", "Cloud");
  insert.run("Startup Networking", 345, "2026-07-07", "Entrepreneurship");
  insert.run("Performance Marketing", 425, "2026-07-08", "Marketing");
  insert.run("Design Jam", 475, "2026-07-09", "Design");
  insert.run("Product Growth Meetup", 445, "2026-07-10", "Product");
  insert.run("Zero Trust Security", 515, "2026-07-11", "Security");
  insert.run("Data Science Bootcamp 2", 565, "2026-07-12", "Data Science");
  insert.run("Mobile App Launch 2", 615, "2026-07-13", "Mobile");
  insert.run("AI in Logistics", 425, "2026-07-14", "Artificial Intelligence");
  insert.run("Cloud Automation Summit", 495, "2026-07-15", "Cloud");
  insert.run("Startup Legal Clinic", 355, "2026-07-16", "Entrepreneurship");
  insert.run("Influencer Marketing", 435, "2026-07-17", "Marketing");
  insert.run("Design Portfolio Review", 485, "2026-07-18", "Design");
  insert.run("Product Feedback Forum", 455, "2026-07-19", "Product");
  insert.run("Security Awareness Day", 525, "2026-07-20", "Security");
  insert.run("Data Science for Business", 575, "2026-07-21", "Data Science");
  insert.run("Mobile UX Meetup", 625, "2026-07-22", "Mobile");
  insert.run("AI in Education", 435, "2026-07-23", "Artificial Intelligence");
  insert.run("Cloud DevOps Day", 505, "2026-07-24", "Cloud");
  insert.run("Startup Fundraising", 365, "2026-07-25", "Entrepreneurship");
  insert.run("Social Media Marketing", 435, "2026-07-26", "Marketing");
  insert.run("Design Sprint Workshop", 495, "2026-07-27", "Design");
  insert.run("Product Strategy Day", 465, "2026-07-28", "Product");
  insert.run("Application Security Expo", 535, "2026-07-29", "Security");
  insert.run("Data Mining Meetup", 585, "2026-07-30", "Data Science");
  insert.run("React Native Night", 635, "2026-07-31", "Mobile");
  insert.run("AI for Good", 445, "2026-08-01", "Artificial Intelligence");
  insert.run("Cloud Native Bootcamp", 515, "2026-08-02", "Cloud");
  insert.run("Startup Success Stories", 375, "2026-08-03", "Entrepreneurship");
  insert.run("Brand Marketing", 445, "2026-08-04", "Marketing");
  insert.run("Design for Web", 495, "2026-08-05", "Design");
  insert.run("Product Launchpad", 465, "2026-08-06", "Product");
  insert.run("Security Panel", 535, "2026-08-07", "Security");
  insert.run("Data Science Meetup", 585, "2026-08-08", "Data Science");
  insert.run("Mobile App Design", 635, "2026-08-09", "Mobile");
  insert.run("AI in Healthcare", 455, "2026-08-10", "Artificial Intelligence");
  insert.run("Cloud Engineering Day", 525, "2026-08-11", "Cloud");
  insert.run("Startup Pitch Night 6", 385, "2026-08-12", "Entrepreneurship");
  insert.run("Digital Marketing Bootcamp", 455, "2026-08-13", "Marketing");
  insert.run("UI/UX Design Conference", 320, "2026-01-28", "Design");
  insert.run("Product Management Summit", 290, "2026-01-29", "Product");
  insert.run("Security Awareness Bootcamp", 350, "2026-01-30", "Security");
  insert.run("Data Science for Startups", 410, "2026-01-31", "Data Science");
  insert.run("Mobile App Creators Meetup", 460, "2026-02-01", "Mobile");
  insert.run(
    "Artificial Intelligence in Retail",
    275,
    "2026-02-02",
    "Artificial Intelligence"
  );
  insert.run("Cloud Transformation Day", 340, "2026-02-03", "Cloud");
  insert.run(
    "Entrepreneurship Essentials",
    180,
    "2026-02-04",
    "Entrepreneurship"
  );
  insert.run("Marketing Analytics Workshop", 255, "2026-02-05", "Marketing");
  insert.run("Design Thinking Jam", 315, "2026-02-06", "Design");
  insert.run("Product Roadmap Planning", 285, "2026-02-07", "Product");
  insert.run("Security for Developers", 355, "2026-02-08", "Security");
  insert.run("Data Science in Healthcare", 405, "2026-02-09", "Data Science");
  insert.run("Mobile UX/UI Night", 455, "2026-02-10", "Mobile");
  insert.run("AI for Business", 265, "2026-02-11", "Artificial Intelligence");
  insert.run("Cloud Security Essentials", 335, "2026-02-12", "Cloud");
  insert.run("Startup Pitch Bootcamp", 195, "2026-02-13", "Entrepreneurship");
  insert.run("Content Marketing Mastery", 275, "2026-02-14", "Marketing");
  insert.run("Design for Accessibility", 325, "2026-02-15", "Design");
  insert.run("Product Innovation Day", 295, "2026-02-16", "Product");
  insert.run("Security Operations Day", 365, "2026-02-17", "Security");
  insert.run("Data Science for Marketing", 415, "2026-02-18", "Data Science");
  insert.run("Mobile App Growth", 465, "2026-02-19", "Mobile");
  insert.run("AI in Education", 275, "2026-02-20", "Artificial Intelligence");
  insert.run("Cloud Automation Workshop", 345, "2026-02-21", "Cloud");
  insert.run(
    "Entrepreneurship Networking",
    205,
    "2026-02-22",
    "Entrepreneurship"
  );
  insert.run("Digital Marketing Bootcamp", 285, "2026-02-23", "Marketing");
  insert.run("Design Sprint Night", 335, "2026-02-24", "Design");
  insert.run("Product Launch Workshop", 305, "2026-02-25", "Product");
  insert.run("Security Panel Discussion", 375, "2026-02-26", "Security");
  insert.run("Data Science Trends", 425, "2026-02-27", "Data Science");
  insert.run("Mobile App Security", 475, "2026-02-28", "Mobile");
  insert.run(
    "AI for Social Good",
    285,
    "2026-03-01",
    "Artificial Intelligence"
  );
  insert.run("Cloud Native Summit", 355, "2026-03-02", "Cloud");
  insert.run("Startup Success Stories", 215, "2026-03-03", "Entrepreneurship");
  insert.run("Brand Marketing Expo", 295, "2026-03-04", "Marketing");
  insert.run("Design for Web", 345, "2026-03-05", "Design");
  insert.run("Product Launchpad", 315, "2026-03-06", "Product");
  insert.run("Security Best Practices", 385, "2026-03-07", "Security");
  insert.run("Data Science Meetup", 435, "2026-03-08", "Data Science");
  insert.run("Mobile App Design", 485, "2026-03-09", "Mobile");
  insert.run("AI in Healthcare", 295, "2026-03-10", "Artificial Intelligence");
  insert.run("Cloud Engineering Bootcamp", 365, "2026-03-11", "Cloud");
  insert.run("Startup Pitch Night 3", 225, "2026-03-12", "Entrepreneurship");
  insert.run("Performance Marketing Day", 305, "2026-03-13", "Marketing");
  insert.run("Design Meetup", 355, "2026-03-14", "Design");
  insert.run("Product Design Day", 325, "2026-03-15", "Product");
  insert.run("Security Awareness Summit", 395, "2026-03-16", "Security");
  insert.run("Data Science Bootcamp", 445, "2026-03-17", "Data Science");
  insert.run("Mobile App Launch", 495, "2026-03-18", "Mobile");
  insert.run("AI for Startups", 305, "2026-03-19", "Artificial Intelligence");
  insert.run("Cloud Networking Day", 375, "2026-03-20", "Cloud");
  insert.run("Startup Demo Day", 235, "2026-03-21", "Entrepreneurship");
  insert.run("Content Strategy Expo", 315, "2026-03-22", "Marketing");
  insert.run("Design for Mobile", 365, "2026-03-23", "Design");
  insert.run("Product Innovation Forum", 335, "2026-03-24", "Product");
  insert.run("Security Operations Meetup", 405, "2026-03-25", "Security");
  insert.run("Data Science Night", 455, "2026-03-26", "Data Science");
  insert.run("Mobile Testing Camp", 505, "2026-03-27", "Mobile");
  insert.run("AI for Marketing", 315, "2026-03-28", "Artificial Intelligence");
  insert.run("Cloud Security Night", 385, "2026-03-29", "Cloud");
  insert.run("Startup Networking", 245, "2026-03-30", "Entrepreneurship");
  insert.run("Performance Marketing", 325, "2026-03-31", "Marketing");
  insert.run("Design Jam", 375, "2026-04-01", "Design");
  insert.run("Product Growth Meetup", 345, "2026-04-02", "Product");
  insert.run("Zero Trust Security", 415, "2026-04-03", "Security");
  insert.run("Data Science Bootcamp 2", 465, "2026-04-04", "Data Science");
  insert.run("Mobile App Launch 2", 515, "2026-04-05", "Mobile");
  insert.run("AI in Logistics", 325, "2026-04-06", "Artificial Intelligence");
  insert.run("Cloud Automation Summit", 395, "2026-04-07", "Cloud");
  insert.run("Startup Legal Clinic", 255, "2026-04-08", "Entrepreneurship");
  insert.run("Influencer Marketing", 335, "2026-04-09", "Marketing");
  insert.run("Design Portfolio Review", 385, "2026-04-10", "Design");
  insert.run("Product Feedback Forum", 355, "2026-04-11", "Product");
  insert.run("Security Awareness Day", 425, "2026-04-12", "Security");
  insert.run("Data Science for Business", 475, "2026-04-13", "Data Science");
  insert.run("Mobile UX Meetup", 525, "2026-04-14", "Mobile");
  insert.run("AI in Education", 335, "2026-04-15", "Artificial Intelligence");
  insert.run("Cloud DevOps Day", 405, "2026-04-16", "Cloud");
  insert.run("Startup Fundraising", 265, "2026-04-17", "Entrepreneurship");
  insert.run("Social Media Marketing", 335, "2026-04-18", "Marketing");
  insert.run("Design Sprint Workshop", 395, "2026-04-19", "Design");
  insert.run("Product Strategy Day", 365, "2026-04-20", "Product");
  insert.run("Application Security Expo", 435, "2026-04-21", "Security");
  insert.run("Data Mining Meetup", 485, "2026-04-22", "Data Science");
  insert.run("React Native Night", 535, "2026-04-23", "Mobile");
  insert.run("AI for Good", 345, "2026-04-24", "Artificial Intelligence");
  insert.run("Cloud Native Bootcamp", 415, "2026-04-25", "Cloud");
  insert.run("Startup Success Stories", 275, "2026-04-26", "Entrepreneurship");
  insert.run("Brand Marketing", 345, "2026-04-27", "Marketing");
  insert.run("Design for Web", 395, "2026-04-28", "Design");
  insert.run("Product Launchpad", 365, "2026-04-29", "Product");
  insert.run("Security Panel", 435, "2026-04-30", "Security");
  insert.run("Data Science Meetup", 485, "2026-05-01", "Data Science");
  insert.run("Mobile App Design", 535, "2026-05-02", "Mobile");
  insert.run("AI in Healthcare", 355, "2026-05-03", "Artificial Intelligence");
  insert.run("Cloud Engineering Day", 425, "2026-05-04", "Cloud");
  insert.run("Startup Pitch Night 4", 285, "2026-05-05", "Entrepreneurship");
  insert.run("Digital Marketing Bootcamp", 355, "2026-05-06", "Marketing");
}
