import { Chapter, Doctor } from './types';

export const DOCTOR_PROFILE: Doctor = {
  name: "Dr. Santhosh Kumar",
  designation: "Associate Professor & HOD",
  department: "Department of Ayurveda Samhita, Siddhanta & Sanskrit",
  college: "Poornima Ayurvedic Medical College Hospital and Research Center, Raichur",
  phone: "+91 99161 23691",
  website: "https://shivamayurvedalaya.com/",
  imageUrl: "/SANTOSH_SIR.jpeg", 
  welcomeMessage: "Ayurveda is not merely a system of medicine, but a profound way of life. Welcome to the Department of Samhita & Siddhanta."
};

export const CHAPTERS: Chapter[] = [
  {
    id: 'ch1',
    number: 1,
    title: 'Padartha Vijnana',
    subtitle: 'Fundamental Principles',
    description: 'Comprehensive MCQ assessment on Padartha Vijnana fundamentals.',
    link: 'https://forms.gle/EKN1tAwGGDuLY3mV9'
  },
  {
    id: 'ch2',
    number: 2,
    title: 'Padārtha & Darśana Nirūpaṇa',
    subtitle: 'Philosophy & Matter',
    description: 'Test your understanding of Padārtha and Darśana concepts.',
    link: 'https://forms.gle/EjQ2UkXXLRkL3pKM8'
  },
  {
    id: 'ch3',
    number: 3,
    title: 'Dravya Vijñāna',
    subtitle: 'Science of Substances',
    description: 'Evaluation of knowledge regarding Dravya (Substance).',
    link: 'https://forms.gle/R1WudxmugCYvd2jV9'
  },
  {
    id: 'ch4',
    number: 4,
    title: 'Guna Vijñāna',
    subtitle: 'Science of Qualities',
    description: 'Assess your grasp on Guna (Qualities) in Ayurveda.',
    link: 'https://forms.gle/rt8A8wJRaG9w8hXo7'
  },
  {
    id: 'ch5',
    number: 5,
    title: 'Karma Vijñāna',
    subtitle: 'Science of Action',
    description: 'MCQ test covering the principles of Karma (Action).',
    link: 'https://forms.gle/4NNGfXUU8hSCPyBR8'
  },
  {
    id: 'ch6',
    number: 6,
    title: 'Samanya Vijñāna',
    subtitle: 'Principle of Similarity',
    description: 'Examination of the Samanya (Similarity) principle.',
    link: 'https://forms.gle/F2Jotk5S42Ao2Mfy5'
  },
  {
    id: 'ch7',
    number: 7,
    title: 'Vishesha Vijñāna',
    subtitle: 'Principle of Dissimilarity',
    description: 'Test on Vishesha (Dissimilarity/Particularity) concepts.',
    link: 'https://forms.gle/jSNLyrYqS8iLGsRn9'
  },
  {
    id: 'ch8',
    number: 8,
    title: 'Samavaya Vijñāna',
    subtitle: 'Inseparable Concomitance',
    description: 'MCQs regarding Samavaya (Inherence) relationships.',
    link: 'https://forms.gle/6A6RYswiwJjUQEah8'
  },
  {
    id: 'ch9',
    number: 9,
    title: 'Abhāva Vijñāna',
    subtitle: 'Science of Non-Existence',
    description: 'Assessment on Abhāva (Absence/Non-existence).',
    link: 'https://forms.gle/mCwP1AMRHZ4YDkZM9'
  },
  {
    id: 'ch10',
    number: 10,
    title: 'Parīkṣā',
    subtitle: 'Examination & Investigation',
    description: 'General examination principles in Ayurveda.',
    link: 'https://forms.gle/9apVvquTsjfV2oF77'
  },
  {
    id: 'ch11',
    number: 11,
    title: 'Aptopadeśa Parikṣā/Pramāṇa',
    subtitle: 'Authoritative Testimony',
    description: 'Test on Aptopadeśa (Verbal Testimony) as a means of knowledge.',
    link: 'https://forms.gle/KEVJd1p8vPRFVCEK9'
  },
  {
    id: 'ch12',
    number: 12,
    title: 'Pratyakṣa Pramāṇa/Parīkṣā',
    subtitle: 'Direct Perception',
    description: 'Evaluation of Pratyakṣa (Direct Observation) concepts.',
    link: 'https://forms.gle/hUkQRBreTaRD3FQW8'
  },
  {
    id: 'ch13',
    number: 13,
    title: 'Anumāna Parīkṣā/Pramāṇa',
    subtitle: 'Inference',
    description: 'MCQ test on Anumāna (Inference) logic and application.',
    link: 'https://forms.gle/Qmumu18Kb5bKuput7'
  },
  {
    id: 'ch14',
    number: 14,
    title: 'Yukti Pramāṇa/Parīkṣa',
    subtitle: 'Logical Reasoning',
    description: 'Assess your understanding of Yukti (Reasoning).',
    link: 'https://forms.gle/1M5fJUV8e8fdRp5P8'
  },
  {
    id: 'ch15',
    number: 15,
    title: 'Upamāna Pramāṇa/Parīkṣā',
    subtitle: 'Analogy & Comparison',
    description: 'Test on Upamāna (Analogy) as a knowledge source.',
    link: 'https://forms.gle/iRT228JK3D7B9tL46'
  },
  {
    id: 'ch16',
    number: 16,
    title: 'Kārya-Kāraṇa Siddhānta',
    subtitle: 'Cause & Effect Theory',
    description: 'Comprehensive test on the Cause and Effect relationships.',
    link: 'https://forms.gle/uNK8L794U8kkibfw5'
  }
];