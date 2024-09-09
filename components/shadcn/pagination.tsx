import React, { useMemo } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface CustomPaginationProps {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
}

const CustomPagination: React.FC<CustomPaginationProps> = React.memo(({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = useMemo(() => {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }, [totalPages]);

    return (
        <Pagination className='py-5'>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => onPageChange(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    >
                        <span>Trước</span>
                    </PaginationPrevious>
                </PaginationItem>
                {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink
                            isActive={currentPage === number}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => onPageChange(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    >
                        <span>Sau</span>
                    </PaginationNext>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
});

CustomPagination.displayName = 'CustomPagination';

export default CustomPagination;