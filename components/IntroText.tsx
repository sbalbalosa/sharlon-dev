import { animated, useTrail } from "@react-spring/web"

export default function IntroText() {
    const trail = useTrail(4, {
        config: { mass: 5, tension: 2000, friction: 200, duration: 600 },
        opacity: 1,
        from: { opacity: 0 },
    })
    return (
        <div className='flex flex-col flex-1 gap-8'>
            <h1 className="font-semibold text-7xl">
                <animated.span style={{ ...trail[0] }}> Hi my name is</animated.span> <br />
                <animated.span className='text-white' style={{ ...trail[1] }}>Sharlon Balbalosa</animated.span>
                <br /><animated.span style={{ ...trail[2] }}>a <span className="text-white">JavaScript Developer</span></animated.span>
            </h1>
            <animated.a className='w-1/4 py-2 text-xl font-bold text-center text-white bg-red-500 rounded-lg shadow hover:bg-red-600' style={{ ...trail[3] }} href="mailto:sbalbalosa@gmail.com">Let&#39;s Talk</animated.a>
        </div>
    )
}