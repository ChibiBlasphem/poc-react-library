import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PaginationContainer, PaginationLink } from './Pagination.styles';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  neighbours?: number;
  onPageSelected: (page: number) => void;
}

function getPagesRange(currentPage: number, totalPages: number, neighbours: number) {
  const lowerBound = Math.max(1, currentPage - neighbours);
  const upperBound = Math.min(totalPages, currentPage + neighbours);

  return [...Array(upperBound - lowerBound + 1).keys()].map((n) => n + lowerBound);
}

function getLinkLabel(page: number, isCurrent: boolean) {
  return `${isCurrent ? 'Current Page, ' : ''}Page ${page}`;
}

export function Pagination({
  totalPages,
  currentPage,
  neighbours = 1,
  onPageSelected,
}: PaginationProps) {
  const pagesToDisplay = getPagesRange(currentPage, totalPages, neighbours);
  const shouldDisplayLeftArrow = !pagesToDisplay.includes(1);
  const shouldDisplayRightArrow = !pagesToDisplay.includes(totalPages);

  return (
    <PaginationContainer role="navigation">
      {shouldDisplayLeftArrow && (
        <PaginationLink>
          <a aria-label="Go to first page" onClick={() => onPageSelected(1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </PaginationLink>
      )}
      {pagesToDisplay.map((page) => (
        <PaginationLink key={page} selected={currentPage === page}>
          <a
            role="link"
            aria-current={currentPage === page ? true : undefined}
            aria-label={getLinkLabel(page, currentPage === page)}
            onClick={() => onPageSelected(page)}
          >
            {page}
          </a>
        </PaginationLink>
      ))}
      {shouldDisplayRightArrow && (
        <PaginationLink>
          <a aria-label="Go to last page" onClick={() => onPageSelected(totalPages)}>
            <FontAwesomeIcon icon={faArrowRight} rotate={180} />
          </a>
        </PaginationLink>
      )}
    </PaginationContainer>
  );
}
