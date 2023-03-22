
import { animated, useInView, useTrail } from "@react-spring/web"

const additionalSkills = [
    "Angular",
    "Redux",
    "NestJS",
    "Salesforce LWC",
    "Git",
    "REST",
    "GraphQL",
    "Apollo",
    "SQL",
    "Postgres",
    "PHP",
    "Ruby on Rails",
    "SolidJS",
    "Jest",
    "Vitest"
];


export default function MoreSkills() {
    const [ref, andMoreInView] = useInView();
    const trails = useTrail(additionalSkills.length, {
        config: { duration: 50 },
        // from: { opacity: 0, scale: 0 },
        opacity: andMoreInView ? 1 : 0,
        scale: andMoreInView ? 1 : 0
    })

    return (<><h3 className="mt-4 text-2xl font-semibold text-white">And more...</h3>
        <div ref={ref} className="flex flex-wrap w-full gap-4 mt-8">
            {trails.map((styles, index) => (
                <animated.div
                    key={index}
                    className="p-4 font-bold text-white bg-gray-900 rounded-sm"
                    style={styles}
                >{additionalSkills[index]}</animated.div>
            ))}
        </div></>);
}