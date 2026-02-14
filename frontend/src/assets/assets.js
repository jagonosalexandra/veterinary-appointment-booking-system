import dental from './services/dental.png'
import diagnostic from './services/diagnostic.png'
import emergency from './services/emergency.png'
import end_of_life from './services/end_of_life.png'
import pet_export from './services/pet_export.png'
import preventive_care from './services/preventive_care.png'
import dental_icon from './services/dental_icon.svg'
import diagnostic_med_icon from './services/diagnostic_med_icon.svg'
import emergency_icon from './services/emergency_icon.svg'
import end_of_life_icon from './services/end_of_life_icon.svg'
import pet_export_icon from './services/pet_export_icon.svg'
import preventive_care_icon from './services/preventive_care_icon.svg'
import doc1 from './doctors/doc1.png'
import doc2 from './doctors/doc2.png'
import doc3 from './doctors/doc3.png'
import doc4 from './doctors/doc4.png'
import doc5 from './doctors/doc5.png'
import doc6 from './doctors/doc6.png'
import doc7 from './doctors/doc7.png'
import doc8 from './doctors/doc8.png'
import doc9 from './doctors/doc9.png'
import doc10 from './doctors/doc10.png'
import doc11 from './doctors/doc11.png'
import doc12 from './doctors/doc12.png'
import doc13 from './doctors/doc13.png'
import logo from './logo.svg'
import profile_img from './profile_img.png'
import hero from './hero.svg'
import banner from './banner.svg'
import header from './header.svg'

export const assets = {
    logo,
    profile_img,
    hero,
    dental_icon,
    diagnostic_med_icon,
    emergency_icon,
    end_of_life_icon,
    pet_export_icon,
    preventive_care_icon,
    banner,
    header
}

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. James Wilson',
        image: doc1,
        specialty: 'feline specialist',
        degree: 'DVM, DABVP (Feline Practice) - University of California',
        experience: '18 Years',
        about: 'Dr. Wilson specializes in advanced cardiac diagnostics for cats and preventive cardiology care. He also provides compassionate end-of-life consultations for cats with heart conditions.',
        address: {
            line1: '945 Ocean Front Walk',
            line2: 'Santa Monica, CA 90401'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Benjamin Hayes',
        image: doc2,
        specialty: 'canine specialist',
        degree: 'DVM, DACVS - Ohio State University',
        experience: '16 Years',
        about: 'Dr. Hayes provides emergency surgical care and diagnostic consultations. He performs urgent dental extractions and oral surgeries in emergency situations.', 
        address: {
            line1: '1875 Buckeye Avenue',
            line2: 'Columbus, OH 43210'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Marcus Rivera',
        image: doc3,
        specialty: 'canine specialist',
        degree: 'DVM, DACVIM - Texas A&M University',
        experience: '9 Years',
        about: 'Dr. Rivera focuses on preventive care for large breed dogs and provides comprehensive dental care services. He also assists with export documentation for pets traveling internationally.',  
        address: {
            line1: '2102 Lone Star Road',
            line2: 'Austin, TX 73301'
        }
    },
    {
        _id: 'doc4',
        image: doc4,
        name: 'Dr. Chloe Bennett',
        specialty: 'canine specialist',
        degree: 'DVM, MS - University of Pennsylvania',
        experience: '9 Years',
        about: 'Dr. Bennett leads our comprehensive preventive care program. She focuses on wellness exams, vaccination protocols, and customized nutrition plans to keep dogs healthy throughout their lives.',
        services: ['preventive care', 'diagnostic medicine', 'dental care'],
        fee: 85,    
        address: {
            line1: '245 Maplewood Drive',
            line2: 'Springfield, IL 62704'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Maya Patel',
        image: doc5,
        specialty: 'exotic companion mammal specialist',
        degree: 'BVSc & AH, DABVP (Exotic Companion Mammal) - Royal Veterinary College',
        experience: '11 Years',
        about: 'Dr. Patel specializes in preventive and diagnostic medicine for rabbits, guinea pigs, and other small mammals. She is also certified to provide health certificates for pet export assistance.',
        services: ['preventive care', 'diagnostic medicine', 'dental care', 'pet export assistance'],
        fee: 95,    
        address: {
            line1: '78 Heirtage Lane',
            line2: 'Westfield, NJ 07090'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Sofia Rossi',
        image: doc6,
        specialty: 'feline specialist',
        degree: 'DVM, DABVP (Feline Practice) - Cornell University',
        experience: '14 Years',
        about: 'Dr. Rossi manages both preventive care and gentle end-of-life services for cats. She provides compassionate in-home euthanasia and grief support for families.',
        services: ['preventive care', 'diagnostic medicine', 'end-of-life care'],
        fee: 90,    
        address: {
            line1: '1542 Willow Creek Road',
            line2: 'Portland, OR 97201'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Olivia Barnes',
        image: doc7,
        specialty: 'feline specialist',
        degree: 'DVM, MPH - University of Florida',
        experience: '6 Years',
        about: 'Dr. Barnes focuses exclusively on preventive care for cats, including wellness exams, parasite prevention, senior cat screenings, and customized vaccination schedules.',
        services: ['preventive care'],
        fee: 75,    
        address: {
            line1: '429 Pine Street',
            line2: 'Gainesville, FL 32601'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Zoe Williams',
        image: doc8,
        specialty: 'bird specialist',
        degree: 'DVM, DABVP (Avian Practice) - University of Georgia',
        experience: '13 Years',
        about: 'Dr. Williams provides preventive care, diagnostic testing, and specialized dental care for avian patients. She is certified to issue international health certificates for bird export.',
        services: ['preventive care', 'diagnostic medicine', 'dental care', 'pet export assistance'],
        fee: 105,    
        address: {
            line1: '331 Orchard Lane',
            line2: 'Atlanta, GA 30303'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Hannah Rodriguez',
        image: doc9,
        specialty: 'canine specialist',
        degree: 'DVM, DACVECC - Colorado State University',
        experience: '12 Years',
        about: 'As head of our 24/7 emergency department, Dr. Rodriguez manages critical cases including trauma, poisoning, and acute illness. She also provides emergency dental procedures.',
        services: ['emergency care', 'dental care', 'diagnostic medicine'],
        fee: 135,    
        address: {
            line1: '5624 Mountain View Drive',
            line2: 'Denver, CO 80202'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Leah Johnson',
        image: doc10,
        specialty: 'canine specialist',
        degree: 'DVM, DACVB - Tufts University',
        experience: '10 Years',
        about: 'Dr. Johnson provides diagnostic consultations for behavioral issues that may indicate underlying medical problems. She also assists with preventive behavioral care for puppies.',
        services: ['diagnostic medicine', 'preventive care'],
        fee: 125,    
        address: {
            line1: '213 Elmwood Terrace',
            line2: 'Boston, MA 02108'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Emma Chan',
        image: doc11,
        specialty: 'bird specialist',
        degree: 'DVM, DABVP (Avian Practice) - UC Davis',
        experience: '8 Years',
        about: 'Dr. Chen heads our avian diagnostic medicine department, utilizing specialized testing to diagnose complex conditions in birds. She is certified to issue international health certificates for bird export.',
        services: ['diagnostic medicine', 'pet export assistance'],
        fee: 110,    
        address: {
            line1: '8732 Cedar Avenue',
            line2: 'San Francisco, CA 94102'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Kenji Tanaka',
        image: doc12,
        specialty: 'reptile and amphibian specialist',
        degree: 'DVM, DABVP (Reptile & Amphibian) - University of Tokyo',
        experience: '11 Years',
        about: 'Dr. Tanaka offers preventive care, diagnostic testing, and specialized services for reptile and amphibian export. He is certified to provide international health certificates for exotic pets.',
        services: ['preventive care', 'diagnostic medicine', 'pet export assistance'],
        fee: 100,    
        address: {
            line1: '325 Sakura Street',
            line2: 'Seattle, WA 98101'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Mina Sharma',
        image: doc13,
        specialty: 'reptile and amphibian specialist',
        degree: 'DVM, DABVP (Reptile & Amphibian) - Michigan State University',
        experience: '15 Years',
        about: 'Dr. Sharma leads our herpetology diagnostic service and provides compassionate end-of-life care for reptiles and amphibians. She helps families navigate difficult decisions with these unique pets.',
        services: ['diagnostic medicine', 'end-of-life care'],
        fee: 150,    
        address: {
            line1: '764 Lakeview Boulevard',
            line2: 'Ann Arbor, MI 48103'
        }
    },
]

export const services = [
    {
        _id: 'preventive_care',
        name: 'preventive care',
        image: preventive_care,
        icon: preventive_care_icon,
        preview: 'Regular checkups, vaccinations, and wellness plans to keep pets healthy.',
        description: "Gentle, thorough checkups where we assess your pet's overall health and catch potential issues early.",
        inclusions: ["Annual wellness exams", 
            "Core and lifestyle vaccinations", 
            "Parasite prevention (fleas, ticks, heartworms)", 
            "Nutritional counseling", 
            "Weight management programs", 
            "Early disease screening"
        ],
        fee: 65
    },
    {
        _id: 'diagnostic_medicine',
        name: 'diagnostic medicine',
        image: diagnostic,
        icon: diagnostic_med_icon,
        preview: 'Advanced testing to identify illnesses and create effective treatment plans.',
        description: "Quick, accurate diagnostics using modern equipment, often with same-day results.",
        inclusions: [
            "In-house laboratory testing (blood work, urinalysis)", 
            "Digital X-rays and imaging", 
            "Ultrasound examinations", "Ultrasound examinations", 
            "Ultrasound examinations", 
            "Infectious disease screening"],
        fee: 120
    },
    {
        _id: 'dental_care',
        name: 'dental care',
        image: dental,
        icon: dental_icon,
        preview: 'Teeth cleaning, extractions, and oral health treatments to prevent pain and systemic health issues.',
        description: "Safe, monitored anesthesia for thorough cleaning and treatment, plus pain management.",
        inclusions: [
            "Comprehensive dental exams", 
            "Professional teeth cleaning", 
            "Dental X-rays", 
            "Tooth extractions when needed", 
            "Oral surgery", 
            "Home care guidance"
        ],
        fee: 300
    },
    {
        _id: 'emergency_care',
        name: 'emergency care',
        image: emergency,
        icon: emergency_icon,
        preview: '24/7 urgent care for accidents, sudden illnesses, or critical conditions when regular clinics are closed.',
        description: "Immediate triage, rapid assessment, and stabilization by our emergency-trained team.",
        inclusions: [
            "After-hours emergency services", 
            "Trauma and injury treatment", 
            "Poisoning/toxin ingestion", 
            "Difficulty breathing", 
            "Severe vomiting/diarrhea", 
            "Sudden collapse or seizures"
        ]
    },
    {
        _id: 'pet_export',
        name: 'pet export assistance',
        image: pet_export,
        icon: pet_export_icon,
        preview: 'Health certificates, vaccinations, and documentation preparation for international pet travel and relocation.',
        description: "Step-by-step guidance through international travel requirements and paperwork.",
        inclusions: [
            "Health certificate preparation", 
            "Vaccination verification", 
            "Microchip identification", 
            "Rabies titer testing", 
            "Import/export documentation", 
            "Travel crate consultation"],
        fee: 75
    },
    {
        _id: 'end_of_life',
        name: 'end of life care',
        image: end_of_life,
        icon: end_of_life_icon,
        preview: 'Compassionate euthanasia services and grief support for pets with terminal conditions or suffering.',
        description: "Gentle, dignified care focused on comfort, with staff who understand this difficult time.",
        inclusions: [
            "Quality of life assessments", 
            "Pain management consultation", 
            "In-clinic or home euthanasia", 
            "Cremation arrangements", 
            "Paw print keepsakes", 
            "Grief support resources"]
    }
]