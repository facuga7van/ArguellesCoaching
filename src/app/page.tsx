import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
// import Feature from './feature'
// import { Medal, HeartPulse, Handshake } from 'lucide-react'
import Link from 'next/link'
import { Divider } from '@/components/ui/divider'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-20 pt-11 pb-24 w-full
        items-center text-center gap-12 bg-color-1"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Paula Argüelles Coaching
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Tu compañero en el camino hacia el crecimiento
          personal y profesional. Con un enfoque
          personalizado y empático, te ayudamos a encontrar
          tus propias herramientas para potenciar tus
          habilidades, superar obstáculos y alcanzar tus
          objetivos. Así podrás transformar tu vida y lograr
          un equilibrio que refleje tu verdadero potencial.
        </Typography>
        <Link
          href="https://calendly.com/arguellespaula/sesion-gratis"
          target="_blank"
        >
          <Button size="lg" variant="perso">
            {`Empecemos`}
          </Button>
        </Link>
        {/* <div className="p-2 border-4 border-[#88B04B]/40">
          <img
            width={1024}
            height={632}
            alt="Coaching image"
            src="pic.jpeg"
          />
        </div> */}
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography
            className="max-w-2xl mb-10"
            variant="h1"
          >
            Un poco sobre mi
          </Typography>
          <div
            className="flex flex-col sm:flex-row gap-6 mx-auto items-center p-5
              border-4 border-[#88B04B]/40"
          >
            <img
              className="sm:w-1/2 "
              alt="Paula image"
              width={400}
              height={832}
              src="paula.jpg"
            />
            <Typography
              className=" sm:ml-5 text-left"
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
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] divider-container">
        <Divider
          variant="primary"
          size="lg"
          image="pic2.jpg"
          text="Tu potencial es infinito, atrevete a explorarlo"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        {/* <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Ofrecemos
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Medal size={24} />}
              headline="Coaching Deportivo"
              description="Diseñado para atletas y equipos, este coaching se centra en mejorar el rendimiento mental y emocional en el deporte, ayudándote a alcanzar tus máximos niveles de desempeño."
            />
            <Feature
              icon={<HeartPulse size={24} />}
              headline="Coaching Ontologico"
              description="Enfocado en el desarrollo personal y la transformación, este tipo de coaching te ayuda a replantear la forma en que ves el mundo y te comunicas, facilitando cambios profundos en tu vida."
            />
            <Feature
              icon={<Handshake size={24} />}
              headline="Coaching Empresarial"
              description="Orientado a líderes y equipos dentro del entorno corporativo, este coaching busca optimizar la toma de decisiones, mejorar la comunicación y fomentar un ambiente de trabajo productivo y colaborativo."
            />
          </div>
        </div> */}

        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography
            className="max-w-2xl mb-10"
            variant="h1"
          >
            ¿Qué es el coaching?
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            Coach es el arte de identificar y cuestionar los
            cambios que querés realizar para ser quien
            realmente querés ser.
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            Es un proceso que te ayuda a alinear tus
            acciones con tus metas y valores, optimizando tu
            potencial y mejorando tu desempeño en distintas
            áreas de tu vida.
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            El coaching no solo te guía a alcanzar tus
            objetivos, sino que también te permite descubrir
            y aprovechar tus fortalezas, gestionando de
            manera consciente los desafíos que enfrentes.
          </Typography>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography
            className="max-w-2xl mb-10"
            variant="h1"
          >
            Como empezamos
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            Primero, agendamos una cita inicial de
            aproximadamente 30 minutos, donde tendremos la
            oportunidad de conocernos mejor. En esta primera
            sesión, me contarás sobre aquello en lo que te
            gustaría trabajar y cuál es el objetivo que
            deseas alcanzar.
          </Typography>
          <Typography
            className="max-w-2xl text-left"
            variant="h6"
          >
            A partir de ahí, comenzaremos un proceso
            personalizado con sesiones regulares de
            aproximadamente 1 hora cada una. Durante estas
            sesiones, exploraremos y desarrollaremos las
            herramientas y habilidades necesarias para tu
            evolución personal y la realización de tus
            metas. Mi objetivo es acompañarte en cada paso
            de este camino, asegurando que te sientas
            apoyado y guiado hacia el logro de tus
            objetivos.
          </Typography>
        </div>

        <div className="flex flex-col gap-6 items-center">
          <Typography
            className="max-w-2xl mb-10 text-center"
            variant="h1"
          >
            Certificaciones
          </Typography>
          <div
            className="flex flex-col sm:flex-row justify-between space-y-5
              sm:space-y-0 sm:space-x-5"
          >
            <img
              className="w-full sm:w-1/3 h-auto max-w-[30rem]"
              alt="Certification image"
              src="cert1.jpg"
            />
            <img
              className="w-full sm:w-1/3 h-auto max-w-[30rem]"
              alt="Certification image"
              src="cert2.jpg"
            />
            <img
              className="w-full sm:w-1/3 h-auto max-w-[30rem]"
              alt="Certification image"
              src="cert3.jpg"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] divider-container">
        <Divider
          variant="primary"
          size="lg"
          image="pic.jpeg"
          text="Conviertete en el cambio que deseas ver en el mundo"
        />
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
          acceder a las sesiones desde cualquier lugar, sin
          desplazamientos, permitiéndote enfocarte
          plenamente en tu crecimiento personal o
          profesional. A través de plataformas seguras y
          confiables, garantizo una experiencia
          personalizada y efectiva, tal como si estuviéramos
          en la misma sala. Mi compromiso es ofrecerte un
          acompañamiento cercano y de calidad, sin importar
          dónde te encuentres.{' '}
        </Typography>
      </div>

      <div
        id="Contacto"
        className="flex flex-col gap-6 items-center"
      >
        <Typography className="max-w-2xl" variant="h1">
          Contacto
        </Typography>
        <div>¡Nuestra primera sesión es gratis!</div>
        <div>
          <Link
            href="https://calendly.com/arguellespaula/sesion-gratis"
            target="_blank"
          >
            <Button size="lg" variant="perso">
              {`Agendar`}
            </Button>
          </Link>
        </div>
        <div className="w-full flex flex-row gap-7">
          <Link
            href="https://wa.me/5491131550341"
            target="_blank"
          >
            <Typography
              className="max-w-2xl hover:text-blue-500"
              variant="h5"
            >
              +54 9 11 3155-0341
            </Typography>
          </Link>
          <Link
            href="mailto:arguellespaula@gmail.com"
            target="_blank"
          >
            <Typography
              className="max-w-2xl hover:text-blue-500"
              variant="h5"
            >
              arguellespaula@gmail.com
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}
