import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'
import { Divider } from '@/components/ui/divider'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-20 pt-11 pb-24 w-full
        items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Argüelles Coaching
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Tu aliado en el camino hacia el crecimiento
          personal y profesional. Con un enfoque
          personalizado y empático, te ayudamos a descubrir
          y potenciar tus habilidades, superar obstáculos y
          alcanzar tus objetivos. Te brindamos las
          herramientas necesarias para transformar tu vida y
          lograr un equilibrio que refleje tu verdadero
          potencial.{' '}
        </Typography>
        <Link href="#Contacto">
          <Button size="tiny" variant="outline">
            {`Empecemos`}
          </Button>
        </Link>
        <img
          width={1024}
          height={632}
          alt="Coaching image"
          src="/pic.jpeg"
        />
      </div>
      <div className="w-full h-[200px] divider-container">
        <Divider
          variant="primary"
          size="lg"
          image="pic2.jpg"
          text="Cambia lo bueno, enfocate en la vida"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography
            className="max-w-2xl mb-10"
            variant="h1"
          >
            Un poco sobre mi
          </Typography>
          <div className="flex flex-row gap-6 mx-auto items-center">
            <Typography
              className="max-w-2xl mr-5 text-left"
              variant="h6"
            >
              Soy Paula Valeria Argüelles, bailarina
              profesional de ballet clásico con una larga
              trayectoria en el prestigioso Teatro Colón.
              Ahora jubilada, continúo transmitiendo mi
              pasión por el arte como maestra en mi propio
              ballet juvenil, el BPA (Ballet Paula
              Argüelles). Con el deseo de expandir mi
              impacto más allá del mundo del ballet, me
              gradué en la carrera de coaching. Hoy, estoy
              en constante perfeccionamiento en esta
              disciplina, combinando mi experiencia en el
              escenario con técnicas de coaching para ayudar
              a otros a alcanzar su máximo potencial, tanto
              en su vida personal como profesional.
            </Typography>
            <img
              width={300}
              height={632}
              alt="Paula image"
              src="/paula.jpg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Ofrecemos
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Coaching Deportivo"
              description="Diseñado para atletas y equipos, este coaching se centra en mejorar el rendimiento mental y emocional en el deporte, ayudándote a alcanzar tus máximos niveles de desempeño."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Coaching Ontologico"
              description="Enfocado en el desarrollo personal y la transformación, este tipo de coaching te ayuda a replantear la forma en que ves el mundo y te comunicas, facilitando cambios profundos en tu vida."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Coaching Empresarial"
              description="Orientado a líderes y equipos dentro del entorno corporativo, este coaching busca optimizar la toma de decisiones, mejorar la comunicación y fomentar un ambiente de trabajo productivo y colaborativo."
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography
            className="max-w-2xl mb-10"
            variant="h1"
          >
            Modalidad Remota
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            En un mundo cada vez más interconectado, he
            adoptado la modalidad remota para ofrecer mis
            servicios de coaching de manera flexible y
            accesible. Esta modalidad me permite llegar a
            personas de diferentes lugares, sin importar la
            distancia, y adaptar las sesiones a tus
            necesidades y horarios.
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            El coaching remoto te brinda la comodidad de
            acceder a las sesiones desde cualquier lugar,
            sin desplazamientos, permitiéndote enfocarte
            plenamente en tu crecimiento personal o
            profesional. A través de plataformas seguras y
            confiables, garantizo una experiencia
            personalizada y efectiva, tal como si
            estuviéramos en la misma sala. Mi compromiso es
            ofrecerte un acompañamiento cercano y de
            calidad, sin importar dónde te encuentres.{' '}
          </Typography>
        </div>
      </div>
      <div className="w-full h-[200px] divider-container">
        <Divider
          variant="primary"
          size="lg"
          image="pic.jpeg"
          text="Cambia tu vida, enfocate lo bueno"
        />
      </div>
      <div
        id="Contacto"
        className="flex flex-col gap-6 items-center"
      >
        <Typography className="max-w-2xl" variant="h1">
          Contacto
        </Typography>
        <div>
          Por cualquier consulta no dudes en hablarme!
        </div>
        <Link
          href="https://wa.me/5491131550341"
          target="_blank"
        >
          <Button size="tiny" variant="outline">
            {`Agendar`}
          </Button>
        </Link>
      </div>
    </div>
  )
}
