import Card from '../Card/Card';

interface FileCardProps {
    fileName: string;
}

/**
 * Display an existing file and allow replacing it
 */
export default function FileCard({ fileName }: FileCardProps) {
    return <Card className="file-card">File: { fileName }</Card>;
}
