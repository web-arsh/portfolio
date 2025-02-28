import Section1 from "@/component/Section1/Section1";
import Section2 from "@/component/Section2/Section2";
import Section3 from "@/component/Section3/Section3";
import Section4 from "@/component/Section4/Section4";
import Section5 from "@/component/Section5/Section5";

export default function Home(){

  return(
    <div className="w-full">
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
    </div>
  );
}