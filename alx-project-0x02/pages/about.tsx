import Button from "@/components/common/Button";
import Header from "@/components/layout/Header" ;

export default function About(){
    return (
        <div>
            <Header />
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>

       <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-5 lg:justify-between gap-4 ">
        <Button size="small" shape="rounded-sm" />
        <Button size="medium" shape="rounded-md" />
        <Button size="large" shape="rounded-full" />
        <Button />
        <Button shape="rounded-sm"/>
        <Button size="large" />

       </div>

        </div>
)
}