/**
 
anglias
https://drive.google.com/drive/folders/1w4_Wrd2DuTaUmuqPQl05qmOUWCLs6-pa?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

gestion financière et comptable
https://drive.google.com/drive/folders/1vIG38vvqpAdmxUjZ7AtLfPJsdb8UqzKe?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

Microondes
https://drive.google.com/drive/folders/1XtvdB4_Jj7qIKI2_YCHwImNSzbzfYqPi?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo


POO
https://drive.google.com/drive/folders/1YWL8hrcar1tZwBwaHpa1-wlscH_lF7dO?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

projet electronique
https://drive.google.com/drive/folders/1pP0Z2qCIICTZOi1gupUp4wkXZR94wmYr?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

reseau
https://drive.google.com/drive/folders/13-yRsnxNp0PtIFbJCGkeVpiU7JDjA69J?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

SIBD (Système d'information et base de données)
https://drive.google.com/drive/folders/1rH4-Ebm8rGEfnW9H5Q8MjsQZpvkLQNFe?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

SE(systeme de exploitation) 
https://drive.google.com/drive/folders/1h6yMp1NryVFGcd2mCqWc7ERO8TD5j8lM?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

traitements de signal
https://drive.google.com/drive/folders/16eHl1AsyMXnTWZz_CaNfmZs5URTrCOvx?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo

autres tds
https://drive.google.com/drive/folders/1PLZ2-_GUtDjq_86Upx-o90-CI8Gs_apd?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo
 * */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import Button from "@/components/ui/button"

export default function AccordionDemo() {
  let data = {
    first: [
      {
        module: "anglais",
        link: "https://drive.google.com/drive/folders/1w4_Wrd2DuTaUmuqPQl05qmOUWCLs6-pa?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo",
      },
      {
        module: "gestion financière et comptable",
        link: "https://drive.google.com/drive/folders/1vIG38vvqpAdmxUjZ7AtLfPJsdb8UqzKe?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo",
      },
      {
        module: "Microondes",
        link: "https://drive.google.com/drive/folders/1XtvdB4_Jj7qIKI2_YCHwImNSzbzfYqPi?fbclid=IwAR37O-rxf3LPJTaTEtCWkW1a24H6lxYbO9qT5NmFS_iec0heBe4a6kahlLo",
      },
    ],
    second: [
      {
        module: "Module 5",
        link: "https://www.google.com",
      },
      {
        module: "Module 6",
        link: "https://www.google.com",
      },
    ],
  }
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>1st Year</AccordionTrigger>
        <AccordionContent>
          {data.first.map((item, index) => {
            return (
              <div key={index}>
                <Link href={item.link}>{item.module}</Link>
              </div>
            )
          })}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>2nd Year</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. Its animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
