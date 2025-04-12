import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/COMPONENTS/ui/pagination"



export function PaginationComponent() {

    return (
        <section className=" mx-auto w-fit flex items-center justify-center">
            <Pagination>
                <PaginationContent>
                    <PaginationItem><PaginationPrevious href="#" /> </PaginationItem>
                    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationNext href="#" />  </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    )
}
