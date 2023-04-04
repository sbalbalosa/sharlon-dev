import { animated, useTrail } from "@react-spring/web"
import DownloadButton from "./DownloadButton"

export default function IntroText() {
    const trail = useTrail(4, {
        config: { mass: 5, tension: 2000, friction: 200, duration: 600 },
        opacity: 1,
        from: { opacity: 0 },
    })
    return (
        <div className='flex flex-col items-center flex-1 gap-8'>
            <h1 className="text-5xl font-semibold">
                <animated.span style={{ ...trail[0] }}> Hi my name is</animated.span> <br />
                <animated.span className='text-white' style={{ ...trail[1] }}>Sharlon Balbalosa</animated.span>
                <br /><animated.span style={{ ...trail[2] }}>a <span className="text-white">JavaScript Developer</span></animated.span>
            </h1>
            <animated.div className='w-full' style={{ ...trail[3] }}>
                <DownloadButton />
            </animated.div>
        </div>
    )
}