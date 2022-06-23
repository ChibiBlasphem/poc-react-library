import Card from '../Card/Card';
import {useRef} from "react";

/**
 * A card to upload a new file.
 */
export default function NewFileCard({}) {
    const fileInput = useRef<HTMLInputElement>(null);

    function openFilePicker() {
        fileInput.current?.click();
    }

    return <Card className="new-file-card" theme="primary" onClick={openFilePicker}>
        <span className="new-data-file-card__title">Click or drag to add a new file</span><br/>
        <span className="new-data-file-card__subtitle">(XLSX, CSV, JSON, …)</span>

        <input
            ref={fileInput}
            className="new-data-file-file-input"
            type="file"
            aria-hidden="true"
            style={{display: 'none'}}
        />
    </Card>;
}
