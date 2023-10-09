import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABS = [
    {
        label: "Overall",
        value: "Overall",
    },
    {
        label: "Trending",
        value: "Trending",
    },

];

const TABLE_HEAD = ["Company", "Ranking", "Total Points", "Last Donation"];

const TABLE_ROWS = [
    {
        img: "https://www.nokia.com/sites/default/files/styles/scale_1440_no_crop/public/2023-02/nokia-refreshed-logo-2_1.png.webp",
        name: "Nokia",
        email: "michael@creative-tim.com",
        job: "1",
        org: "Developer",
        points: "74000000",
        date: "24/12/08",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        name: "Macrohard",
        email: "john@creative-tim.com",
        job: "2",
        org: "Organization",
        points: "19000",
        date: "23/04/18",
    },
    {
        img: "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg",
        name: "Pear",
        email: "alexa@creative-tim.com",
        job: "3",
        org: "Developer",
        points: "9900",
        date: "23/04/18",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWLHiUE5xj4Ihl-Ugnmlkh9Uop4GLyj_EddRxrw2Jvw&s",
        name: "Headnovel",
        email: "laurent@creative-tim.com",
        job: "4",
        org: "Projects",
        points: "8500",
        date: "19/09/17",
    },
    {
        img: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
        name: "Webfilms",
        email: "richard@creative-tim.com",
        job: "5",
        org: "Executive",
        points: "500",
        date: "04/10/21",
    },

];

export function SortableTable() {
    return (
        <>
            <Card className="h-full w-full p-8 mt-4">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h1" color="blue-gray">
                                Leaderboard
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See how the competition stacks up
                            </Typography>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader>
                                {TABS.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardBody className="overflow-x-scroll  px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th
                                        key={head}
                                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                        >
                                            {head}{" "}
                                            {index !== TABLE_HEAD.length - 1 && (
                                                <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                            )}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(
                                ({ img, name, email, job, org, points, date }, index) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar src={img} alt={name} size="sm" />
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {name}
                                                        </Typography>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {job}
                                                    </Typography>

                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {points}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {date}
                                                </Typography>
                                            </td>

                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>


                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>



    );
}