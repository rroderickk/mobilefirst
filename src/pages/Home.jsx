import   React           from "react";
import { Header }        from "@components/Header";
import { SectionUno }    from "@components/SectionUno";
import { SectionDos }    from "@components/SectionDos";
import { SectionTres }   from "@components/SectionTres";
import { SectionCuatro } from "@components/SectionCuatro";
import { Footer }        from "@components/Footer";

const Home =()=> { return ( 

<> 

<Header/> 

<SectionUno/> <SectionDos/> <SectionTres/> <SectionCuatro/> 

<Footer/> 

</> ); 

}; export { Home };