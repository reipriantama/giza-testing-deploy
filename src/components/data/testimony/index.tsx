import kasparSitumorang from "../../../assets/testimony/kasparSitumorang.png";
import roberthaDayu1 from "../../../assets/testimony/roberthaDayu.png";
import laurenKay from "../../../assets/testimony/laurenKay.png";
import patriaAbditiar from "../../../assets/testimony/patriaAbditiar.png";
import naufalDzaki from "../../../assets/testimony/naufalDzaki.png";

interface TestimonyData {
  id: number;
  text: string;
  image: string;
  name: string;
  position: string;
}

export const testimonyData: TestimonyData[] = [
  {
    id: 1,
    text: "I am very satisfied with the exceptional work quality and professionalism displayed by Giza Lab, as our Design Consultant. Their expertise and attention to detail have greatly exceeded my expectations. They also showed how well they can organized the team and the tasks.",
    image: kasparSitumorang,
    name: "Kaspar Situmorang",
    position: "EVP Digital Bank BRI, Tbk.",
  },
  {
    id: 2,
    text: "Personally, I really enjoy working with Gizalab. The design maturity is already great, so it doesn’t take much effort to explain the project. The team is friendly and professional. I didn’t expect to find an agency that works so seamlessly.",
    image: roberthaDayu1,
    name: "Robertha Dayu",
    position: "Marketing Manager, Emurgo Indonesia",
  },
  {
    id: 3,
    text: "We were so excited and amazed. Thank you for the information and research results so thorough and detailed. We don't know what we are doing, but with the research data provided from Gizalab we know exactly what to do.",
    image: laurenKay,
    name: "Lauren Kay",
    position: "Co Founder & Creative, Brave Factor",
  },
  {
    id: 4,
    text: "The Gizalab teams are very professional in their work. They deliver high quality design consistently even with the tight deadlines given. I highly recommend the Giza team for your UI/UX design services.",
    image: patriaAbditiar,
    name: "Patria Abditiar",
    position: "Marketing Manager, Emurgo Indonesia",
  },
  {
    id: 5,
    text: "Gizalab really does a good job and the speed is really fast.  Before we realize, we’re already through sprints 1, 2, 3. Overall, I’m very satisfied. Their work is also detailed for each document like UT Report, Design, Roadmap, etc",
    image: naufalDzaki,
    name: "Naufal Dzaki Nur Hidayat",
    position: "Digital Produt Manager, Aldiracita Sekuritas",
  },
];
