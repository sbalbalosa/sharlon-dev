import { animated, useInView } from "@react-spring/web"
import toPercent from "@/utils/toPercent";


type Props = {
    from: number;
    to: number;
}

export default function SkillBar({ from, to }: Props) {
    const [ref, springs] = useInView(() => ({
        from: { width: toPercent(from) },
        to: { width: toPercent(to) },
    }))

    return (
        <animated.div ref={ref} className="h-2 mt-2 bg-green-500 rounded" style={springs} />
    )
}