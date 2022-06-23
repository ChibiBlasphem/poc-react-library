import Card from '../Card/Card';

/**
 * A card to upload a new file.
 */
export default function NewFileCard({}) {
    return <Card className="new-file-card" theme="primary">
        <span className="new-data-file-card__title">Click or drag to add a new file</span><br/>
        <span className="new-data-file-card__subtitle">(XLSX, CSV, JSON, …)</span>
    </Card>;
}
