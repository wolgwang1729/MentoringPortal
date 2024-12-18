import React, { useState } from "react";
import "./ResourcesCard.css";

export default function ResourcesCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    {
      id: "card1",
      title: "JEE Mains",
      subtitle: "For undergraduate engineering programs in India.",
      description:
        "The Joint Entrance Examination (JEE) Mains is a national-level exam conducted by the National Testing Agency (NTA) for admission to undergraduate engineering programs at institutions like NITs, IIITs, and other centrally funded technical institutes. The exam evaluates candidates on their knowledge of Physics, Chemistry, and Mathematics. It consists of two papers: Paper 1 (for B.Tech) and Paper 2 (for B.Arch). JEE Mains is the first stage of the JEE exam, with successful candidates eligible to appear for JEE Advanced, which is required for admission to the Indian Institutes of Technology (IITs)",
      modalHTML: `<p><strong>What is JEE Mains?</strong></p>
<p>The Joint Entrance Examination (JEE) Mains is an entrance test conducted by the National Testing Agency (NTA) for admission to various undergraduate engineering programs across India. It is the first stage of the JEE exam, followed by JEE Advanced for admission into the prestigious Indian Institutes of Technology (IITs). The exam typically consists of multiple-choice questions from Physics, Chemistry, and Mathematics, and is known for its competitive nature.</p>

<p><strong>Why is JEE Mains Important?</strong></p>
<p>JEE Mains serves as a gateway to some of the top engineering institutes in India, including National Institutes of Technology (NITs) and Indian Institutes of Information Technology (IIITs). It is crucial for aspiring engineers to perform well in this exam to secure a seat in their desired institution and course.</p>

<p><strong>Tips for Preparing for JEE Mains:</strong></p>
<ul>
    <li><strong>Start Early:</strong> Begin your preparation at least a year before the exam. Building a solid foundation in Physics, Chemistry, and Mathematics is essential for success.</li>
    <li><strong>Understand the Syllabus:</strong> Familiarize yourself with the JEE Mains syllabus. Focus on important chapters and concepts that carry higher weightage in the exam.</li>
    <li><strong>Practice Regularly:</strong> Consistent practice is key to success. Solve previous years' question papers and take mock tests to improve speed and accuracy.</li>
    <li><strong>Time Management:</strong> Develop a study schedule that balances all subjects. Allocate time for revision and practice, and stick to your plan.</li>
    <li><strong>Stay Updated:</strong> Keep track of any changes in the exam pattern or syllabus announced by NTA. Regularly visit the official JEE Mains website for updates.</li>
    <li><strong>Focus on Conceptual Learning:</strong> Instead of rote learning, aim to understand the concepts thoroughly. JEE Mains tests your understanding of fundamental principles, so clarity is key.</li>
    <li><strong>Revise and Stay Consistent:</strong> Repetition and regular revision of key topics will strengthen your grasp. Avoid last-minute cramming.</li>
</ul>

<p><strong>Recommended Resources for JEE Mains Preparation:</strong></p>
<ul>
    <li><strong>Books:</strong>
        <ul>
            <li><em>Physics:</em> "Concepts of Physics" by H.C. Verma, "Problems in General Physics" by I.E. Irodov</li>
            <li><em>Chemistry:</em> "Physical Chemistry" by O.P. Tandon, "Organic Chemistry" by Morrison and Boyd</li>
            <li><em>Mathematics:</em> "Problems in Calculus of One Variable" by I.A. Maron, "IIT Mathematics" by M.L. Khanna</li>
        </ul>
    </li>
    <li><strong>Online Platforms:</strong>
        <ul>
            <li><a href="https://www.khanacademy.org">Khan Academy</a> (for concept clarity)</li>
            <li><a href="https://www.embibe.com">Embibe</a> (for mock tests and practice questions)</li>
            <li><a href="https://www.byjus.com">Byju's</a> (for video lessons and personalized learning)</li>
        </ul>
    </li>
    <li><strong>Coaching Centers:</strong> Many students opt for coaching institutes like <em>Allen, Aakash, and Resonance</em> to get structured learning, expert guidance, and access to study material.</li>
</ul>

<p><strong>Final Words:</strong></p>
<p>JEE Mains is a challenging exam, but with the right strategy, resources, and consistent effort, success is within reach. Stay focused, work hard, and don't forget to take breaks to avoid burnout. Best of luck with your preparations!</p>
`,
      image:
        "https://images.hindustantimes.com/img/2023/01/11/1600x900/jee_main_2023_1673406172968_1673406173333_1673406173333.png",
    },
    {
      id: "card2",
      title: "JEE Advanced",
      subtitle: "For admission to the Indian Institutes of Technology (IITs)",
      description:
        "The Joint Entrance Examination Advanced (JEE Advanced) is the second and more challenging stage of the JEE exam, specifically for admission to the Indian Institutes of Technology (IITs). Only candidates who qualify JEE Mains are eligible to appear for JEE Advanced. The exam tests candidates' deep understanding of subjects like Physics, Chemistry, and Mathematics through intricate and conceptual problem-solving. With its two papers, JEE Advanced is known for its rigorous difficulty, designed to identify students with exceptional analytical skills and understanding. Admission to IITs is highly competitive, making JEE Advanced one of the toughest exams.",
      modalHTML: `<p><strong>What is JEE Advanced?</strong></p>
<p>The Joint Entrance Examination (JEE) Advanced is the second stage of the JEE exam, taken by students who have qualified in JEE Mains. It is conducted by one of the IITs on a rotational basis and serves as the entrance exam for admission into the prestigious Indian Institutes of Technology (IITs) and other top engineering institutions in India. JEE Advanced is known for its complexity and is considered one of the most challenging undergraduate entrance exams in the world.</p>

<p><strong>Why is JEE Advanced Important?</strong></p>
<p>JEE Advanced is the gateway to admission into the IITs, which are regarded as the top engineering institutes in India. A good rank in JEE Advanced opens doors to various undergraduate programs in these institutes, which offer high-quality education and excellent career prospects. It is a highly competitive exam, and performing well in JEE Advanced is crucial for securing admission to IITs.</p>

<p><strong>Tips for Preparing for JEE Advanced:</strong></p>
<ul>
    <li><strong>Focus on JEE Mains First:</strong> Since JEE Advanced is based on JEE Mains, make sure you first prepare well for JEE Mains. Only students who clear JEE Mains are eligible for JEE Advanced.</li>
    <li><strong>Understand the Syllabus and Exam Pattern:</strong> Get familiar with the detailed syllabus and exam pattern of JEE Advanced. It includes subjects like Physics, Chemistry, and Mathematics, with more focus on analytical thinking and application-based questions.</li>
    <li><strong>Work on Conceptual Clarity:</strong> JEE Advanced focuses on in-depth understanding and application of concepts. It’s not about rote learning; instead, focus on understanding the underlying principles.</li>
    <li><strong>Practice Challenging Problems:</strong> The level of difficulty in JEE Advanced is much higher than JEE Mains. Solve as many difficult problems and previous years’ papers as possible to build problem-solving skills.</li>
    <li><strong>Time Management:</strong> Develop a study schedule and allocate more time for subjects or topics you find difficult. Practice solving problems under time constraints to improve speed and accuracy.</li>
    <li><strong>Revise Regularly:</strong> Revision is key to retaining information and improving your performance. Regularly revise important formulas, concepts, and topics.</li>
    <li><strong>Take Mock Tests:</strong> Take online mock tests and solve previous years’ question papers under exam-like conditions. This will help you get used to the format of the exam and improve your time management skills.</li>
    <li><strong>Stay Calm and Positive:</strong> JEE Advanced is a high-pressure exam, but maintaining a calm and focused mindset is crucial for success. Believe in your preparation and stay confident.</li>
</ul>

<p><strong>Recommended Resources for JEE Advanced Preparation:</strong></p>
<ul>
    <li><strong>Books:</strong>
        <ul>
            <li><em>Physics:</em> "IIT Physics" by D.C. Pandey, "Problems in General Physics" by I.E. Irodov</li>
            <li><em>Chemistry:</em> "Physical Chemistry" by O.P. Tandon, "Organic Chemistry" by Morrison and Boyd, "Inorganic Chemistry" by J.D. Lee</li>
            <li><em>Mathematics:</em> "Problems in Calculus of One Variable" by I.A. Maron, "Higher Algebra" by Hall and Knight, "IIT Mathematics" by M.L. Khanna</li>
        </ul>
    </li>
    <li><strong>Online Platforms:</strong>
        <ul>
            <li><a href="https://www.khanacademy.org">Khan Academy</a> (for fundamental concepts and problem-solving practice)</li>
            <li><a href="https://www.embibe.com">Embibe</a> (for personalized learning, mock tests, and practice questions)</li>
            <li><a href="https://www.byjus.com">Byju's</a> (for video lessons and interactive quizzes)</li>
        </ul>
    </li>
    <li><strong>Coaching Centers:</strong> Many students opt for coaching institutes like <em>Allen, Aakash, and Resonance</em> for structured learning, expert guidance, and access to study materials tailored to JEE Advanced.</li>
</ul>

<p><strong>Final Words:</strong></p>
<p>JEE Advanced is a highly competitive and challenging exam, but with the right approach, resources, and determination, you can succeed. Stay focused, work on improving your problem-solving skills, and remain consistent in your preparation. Believe in yourself and trust the process. Best of luck with your JEE Advanced preparation!</p>
`,
      image:
        "https://monomousumi.com/wp-content/uploads/JEE-advanced-1624964200.jpg",
    },
    {
      id: "card3",
      title: "NEET",
      subtitle: "For undergraduate medical courses in India.",
      description:
        "The National Eligibility cum Entrance Test (NEET) is a centralized national-level exam for admission to undergraduate medical courses such as MBBS, BDS, and other allied health sciences programs. NEET is organized by the National Testing Agency (NTA) and is the sole entrance test for admission to medical colleges across India. The exam primarily focuses on topics from Physics, Chemistry, and Biology, assessing candidates' understanding and application of concepts. NEET serves as the gateway for students aspiring to enter prestigious government and private medical institutions across India and also holds eligibility for foreign medical universities.",
      modalHTML: `<p><strong>What is NEET?</strong></p>
<p>The National Eligibility cum Entrance Test (NEET) is a national-level entrance exam conducted by the National Testing Agency (NTA) for admission to undergraduate medical courses in India. NEET is the gateway for students seeking admission to MBBS, BDS, and other medical and dental courses in government and private medical colleges across the country. It is a highly competitive exam and is taken by lakhs of aspirants every year.</p>

<p><strong>Why is NEET Important?</strong></p>
<p>NEET is the only entrance exam for admission to most medical colleges in India, including prestigious institutions like AIIMS (All India Institute of Medical Sciences) and JIPMER (Jawaharlal Institute of Postgraduate Medical Education & Research). A good score in NEET opens up opportunities to pursue a career in medicine, offering a variety of specializations and career paths. Securing a seat in a government medical college is the goal for many aspirants.</p>

<p><strong>Tips for Preparing for NEET:</strong></p>
<ul>
    <li><strong>Start Early:</strong> Begin your preparation well in advance (at least a year before the exam). A strong foundation in subjects like Physics, Chemistry, and Biology is essential.</li>
    <li><strong>Understand the Syllabus:</strong> NEET syllabus is based on the NCERT curriculum. Be familiar with the syllabus for Physics, Chemistry, and Biology, and focus on the most important chapters and topics that carry higher weightage in the exam.</li>
    <li><strong>Focus on NCERT Books:</strong> NEET exams primarily test concepts and topics from NCERT textbooks, especially for Biology. Make sure to thoroughly study the NCERT books and understand each concept well.</li>
    <li><strong>Practice Regularly:</strong> Solve previous years' question papers and take mock tests to get used to the exam format and improve your speed. Regular practice is essential to mastering time management and accuracy.</li>
    <li><strong>Strengthen Problem-Solving Skills:</strong> NEET includes multiple-choice questions with a focus on conceptual application. Regular practice of numerical problems (especially in Physics and Chemistry) will improve your problem-solving skills.</li>
    <li><strong>Stay Consistent:</strong> Consistency in study and regular revision are critical. Follow a proper study schedule, allocate time for each subject, and stick to it. Ensure you revise regularly to reinforce your learning.</li>
    <li><strong>Stay Healthy:</strong> Maintain a balanced lifestyle. Get enough sleep, eat well, and take regular breaks during study sessions to avoid burnout. Physical and mental well-being is essential during NEET preparation.</li>
    <li><strong>Time Management:</strong> During the exam, time management is key. Practice solving questions within the allocated time and avoid spending too much time on any one question.</li>
</ul>

<p><strong>Recommended Resources for NEET Preparation:</strong></p>
<ul>
    <li><strong>Books:</strong>
        <ul>
            <li><em>Physics:</em> "Concepts of Physics" by H.C. Verma, "Objective Physics" by D.C. Pandey</li>
            <li><em>Chemistry:</em> "Physical Chemistry" by O.P. Tandon, "Organic Chemistry" by Morrison and Boyd, "Inorganic Chemistry" by J.D. Lee</li>
            <li><em>Biology:</em> "Trueman's Biology", "Objective Biology" by Dinesh</li>
        </ul>
    </li>
    <li><strong>Online Platforms:</strong>
        <ul>
            <li><a href="https://www.khanacademy.org">Khan Academy</a> (for concept clarity and topic-based lessons)</li>
            <li><a href="https://www.embibe.com">Embibe</a> (for personalized learning, mock tests, and practice questions)</li>
            <li><a href="https://www.byjus.com">Byju's</a> (for video lessons, quizzes, and detailed explanations)</li>
        </ul>
    </li>
    <li><strong>Coaching Centers:</strong> Many students prefer coaching institutes like <em>Aakash, Allen, and Resonance</em> to get expert guidance, structured study plans, and comprehensive study materials.</li>
</ul>

<p><strong>Final Words:</strong></p>
<p>NEET is a competitive and demanding exam, but with the right approach, consistent preparation, and strong focus, you can achieve success. Stay dedicated to your study plan, stay positive, and don’t hesitate to seek help when needed. Best of luck with your NEET preparation!</p>

`,
      image:
        "https://ziapy.com/wp-content/uploads/2020/11/623460-265264-neet.jpg",
    },
    {
      id: "card4",
      title: "CUET",
      subtitle: "For central university admissions.",
      description:
        "The Common University Entrance Test (CUET) is a nationwide entrance exam for admission to undergraduate programs in central universities and several other higher education institutions in India. Conducted by the National Testing Agency (NTA), CUET replaces multiple entrance exams with a unified test, offering students a streamlined pathway into various academic programs. The exam includes sections on language proficiency, general knowledge, and domain-specific subjects like sciences, humanities, and social sciences. CUET aims to ensure fairness and provide equal opportunities for candidates from different backgrounds, ensuring access to quality education across India's central universities.",
      modalHTML: `<p><strong>What is CUET?</strong></p>
<p>The Common University Entrance Test (CUET) is a national-level entrance exam conducted by the National Testing Agency (NTA) for admission to undergraduate programs in Central Universities and other participating institutions across India. CUET serves as a single entrance exam for students who wish to pursue various courses, including Humanities, Science, Commerce, and more, in top universities such as Delhi University (DU), Jawaharlal Nehru University (JNU), Banaras Hindu University (BHU), and others.</p>

<p><strong>Why is CUET Important?</strong></p>
<p>CUET has replaced several individual university entrance exams, streamlining the process of admission to various central universities. By appearing for CUET, students can apply to multiple universities with a single exam, making the admission process more efficient. A good score in CUET opens up opportunities for admission to prestigious universities across India in a wide variety of undergraduate programs.</p>

<p><strong>Tips for Preparing for CUET:</strong></p>
<ul>
    <li><strong>Understand the Syllabus:</strong> CUET has a diverse syllabus depending on the course you are applying for. Make sure to review the specific syllabus for your chosen course (e.g., for Humanities, Science, or Commerce). Focus on core subjects such as English, General Knowledge, and the specific subject-related topics.</li>
    <li><strong>Choose the Right Subjects:</strong> CUET offers a range of subjects to choose from. Choose subjects based on your strengths and the requirements of the course you wish to pursue. For example, if you're applying for a Humanities program, focus on subjects like History, Political Science, and English.</li>
    <li><strong>Time Management:</strong> Set a study schedule and stick to it. Prioritize subjects that are more challenging for you. Allocate time for regular revisions and mock tests to evaluate your progress.</li>
    <li><strong>Focus on English Proficiency:</strong> A significant portion of CUET includes English language skills, including reading comprehension, grammar, and vocabulary. Regular reading of newspapers, novels, and practicing comprehension exercises will help strengthen these skills.</li>
    <li><strong>Practice Mock Tests:</strong> Take online mock tests and sample papers to familiarize yourself with the exam format. This will help improve your speed, accuracy, and overall exam strategy.</li>
    <li><strong>Stay Updated with Current Affairs:</strong> General Knowledge and Current Affairs are key components of CUET. Stay updated with the latest national and international events, political developments, science news, and more through newspapers, online resources, and apps.</li>
    <li><strong>Strengthen Subject Knowledge:</strong> For subject-specific sections (e.g., Physics, Chemistry, Biology, or Mathematics), focus on mastering the core concepts and practice problem-solving regularly. For subjects like History or Political Science, emphasize understanding key events and their significance.</li>
    <li><strong>Stay Consistent and Positive:</strong> Consistency in preparation is key. Stay positive, believe in your preparation, and don't be discouraged by occasional setbacks. Keep a balance between study and relaxation.</li>
</ul>

<p><strong>Recommended Resources for CUET Preparation:</strong></p>
<ul>
    <li><strong>Books:</strong>
        <ul>
            <li><em>English:</em> "High School English Grammar and Composition" by Wren & Martin, "Objective General English" by S.P. Bakshi</li>
            <li><em>General Knowledge/Current Affairs:</em> "Manorama Yearbook," "Pratiyogita Darpan" (for General Knowledge), "The Hindu" or "The Times of India" (for current affairs)</li>
            <li><em>Subject-Specific Books:</em> Choose books based on your course (e.g., NCERT books for subjects like Physics, Chemistry, and Mathematics for Science, or "History of Modern India" by Bipan Chandra for Humanities)</li>
        </ul>
    </li>
    <li><strong>Online Platforms:</strong>
        <ul>
            <li><a href="https://www.khanacademy.org">Khan Academy</a> (for concept clarity in subjects like Mathematics, Science, and English)</li>
            <li><a href="https://www.embibe.com">Embibe</a> (for mock tests, practice questions, and personalized learning)</li>
            <li><a href="https://www.byjus.com">Byju's</a> (for video lessons, quizzes, and interactive learning)</li>
        </ul>
    </li>
    <li><strong>Coaching Centers:</strong> Many students prefer coaching centers like <em>Aakash, Allen, or Resonance</em> for structured study plans and expert guidance. Online coaching platforms like <em>Unacademy</em> and <em>Vedantu</em> also offer courses specifically designed for CUET preparation.</li>
</ul>

<p><strong>Final Words:</strong></p>
<p>CUET is a crucial exam for students aspiring to join top central universities in India. With focused preparation, time management, and consistency, you can perform well in the exam. Stay confident, keep practicing, and remember that consistent effort will lead to success. Best of luck with your CUET preparation!</p>

`,
      image:
        "https://www.educationnews.shiksha/wp-content/uploads/2023/07/cuet1.png",
    },
    {
      id: "card5",
      title: "CLAT",
      subtitle: "For admission to law programs in National Law Universities",
      description:
        "The Common Law Admission Test (CLAT) is a national-level entrance exam for admission to undergraduate (BA LLB) and postgraduate (LLM) law programs offered by the National Law Universities (NLUs) and other participating institutions in India. The exam assesses a candidate's aptitude in various areas such as English language, logical reasoning, general knowledge, quantitative techniques, and legal reasoning. CLAT is a highly competitive test, and successful candidates secure a place at top-tier law schools, providing a foundation for careers in law, legal practice, and public policy. It is conducted by a consortium of NLUs on a rotational basis.",
      modalHTML: `<p><strong>What is CLAT?</strong></p>
<p>The Common Law Admission Test (CLAT) is a national-level entrance exam conducted by the Consortium of National Law Universities (NLUs) for admission to undergraduate and postgraduate law programs in various National Law Universities (NLUs) across India. CLAT is highly competitive and is considered the gateway to law education in prestigious institutions offering BA LLB, LLB, and LLM programs.</p>

<p><strong>Why is CLAT Important?</strong></p>
<p>CLAT is one of the most important entrance exams for students who wish to pursue a career in law. A good rank in CLAT can secure you admission to some of India’s top National Law Universities (NLUs), such as the National Law School of India University (NLSIU) Bangalore, National Academy of Legal Studies and Research (NALSAR) Hyderabad, and National Law University Delhi (NLU Delhi). It opens up various career opportunities in law, including roles as legal advisors, corporate lawyers, public prosecutors, and more.</p>

<p><strong>Tips for Preparing for CLAT:</strong></p>
<ul>
    <li><strong>Understand the Syllabus:</strong> The CLAT syllabus is vast and includes subjects like English Language, General Knowledge & Current Affairs, Legal Reasoning, Logical Reasoning, and Mathematics. Familiarize yourself with the detailed syllabus and create a study plan that covers all sections.</li>
    <li><strong>Focus on English and Comprehension:</strong> English language skills are a significant part of the CLAT exam. Regularly read newspapers, magazines, novels, and practice comprehension passages to improve vocabulary, grammar, and reading skills.</li>
    <li><strong>Stay Updated with Current Affairs:</strong> General Knowledge and Current Affairs are crucial for the CLAT exam. Make sure to stay updated with national and international news, legal developments, economic trends, and important events. Use resources like newspapers, news apps, and monthly magazines like "Pratiyogita Darpan."</li>
    <li><strong>Practice Logical Reasoning:</strong> Logical Reasoning includes puzzles, series, syllogisms, and critical thinking. Regular practice of these topics will improve your problem-solving abilities and speed in this section.</li>
    <li><strong>Master Legal Reasoning:</strong> Legal Reasoning questions test your ability to apply legal principles to real-life scenarios. Develop a strong understanding of basic legal concepts like rights, duties, justice, and legal reasoning through books and case studies.</li>
    <li><strong>Work on Time Management:</strong> The CLAT exam is time-bound, and it’s important to solve questions quickly and accurately. Practice solving mock tests and previous years' papers to improve your speed and accuracy.</li>
    <li><strong>Stay Consistent:</strong> Consistent preparation is key to success. Create a study timetable that allocates time for all sections, including revision time. Stay disciplined and avoid procrastination.</li>
    <li><strong>Take Mock Tests:</strong> Regular mock tests are essential for understanding the exam pattern, identifying weak areas, and improving speed. Analyze your performance in each mock test and work on your mistakes.</li>
</ul>

<p><strong>Recommended Resources for CLAT Preparation:</strong></p>
<ul>
    <li><strong>Books:</strong>
        <ul>
            <li><em>English:</em> "Word Power Made Easy" by Norman Lewis, "High School English Grammar and Composition" by Wren & Martin</li>
            <li><em>General Knowledge & Current Affairs:</em> "Manorama Yearbook," "Pratiyogita Darpan" (monthly current affairs magazine), "The Hindu" (for current affairs)</li>
            <li><em>Legal Aptitude:</em> "Legal Awareness and Legal Aptitude" by A.P. Bhardwaj, "CLAT Legal Reasoning" by Pearson</li>
            <li><em>Logical Reasoning:</em> "A Modern Approach to Logical Reasoning" by R.S. Agarwal</li>
            <li><em>Mathematics:</em> "Quantitative Aptitude for Competitive Examinations" by R.S. Agarwal</li>
        </ul>
    </li>
    <li><strong>Online Platforms:</strong>
        <ul>
            <li><a href="https://www.khanacademy.org">Khan Academy</a> (for Logical Reasoning, English, and Math practice)</li>
            <li><a href="https://www.clatprep.in">CLATPrep</a> (for CLAT-specific study materials and mock tests)</li>
            <li><a href="https://www.byjus.com">Byju's</a> (for video lessons and personalized coaching)</li>
        </ul>
    </li>
    <li><strong>Coaching Centers:</strong> Many students opt for coaching centers such as <em>Aakash, Career Launcher, IMS, and CLAT Possible</em> to get structured learning and guidance tailored specifically for CLAT preparation.</li>
</ul>

<p><strong>Final Words:</strong></p>
<p>CLAT is a challenging exam, but with the right preparation, consistency, and practice, you can excel. Focus on strengthening your core skills in English, Reasoning, Legal Aptitude, and General Knowledge. Stay disciplined, take regular mock tests, and keep up with current affairs. Remember, every effort you put in brings you closer to your dream of studying law at one of India’s top NLUs. Best of luck with your CLAT preparation!</p>

`,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Consortium_of_NLUs_logo.png",
    },
  ];

  return (
    <div className="resources-card">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`blog-card ${index % 2 !== 0 ? "alt" : ""}`}
        >
          <div className="meta">
            <div
              className="photo"
              style={{ backgroundImage: `url(${card.image})`,backgroundSize: 'contain', backgroundRepeat:'no-repeat'  }}
            ></div>
          </div>
          <div className="description">
            <h1>{card.title}</h1>
            <h2>{card.subtitle}</h2>
            <p>{card.description}</p>
            <p className="read-more">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCard(card);
                }}
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      ))}

      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>
            <h1 className="text-center text-3xl font-serif font-bold">
              {selectedCard.title}
            </h1>
            <div
              className="my-5"
              dangerouslySetInnerHTML={{ __html: selectedCard.modalHTML }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
