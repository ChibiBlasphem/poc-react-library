import Card from '../Card/Card';
import {useRef} from "react";

interface FileCardProps {
    fileName: string;
}

/**
 * Display an existing file and allow replacing it
 */
export default function FileCard({ fileName }: FileCardProps) {
    const fileInput = useRef<HTMLInputElement>(null);

    function openFilePicker() {
        fileInput.current?.click();
    }

    return <Card className="file-card">
        <div className="file-card__title">File: { fileName }</div>
        <button className="file-card__replace-button" onClick={ openFilePicker }>Replace</button>

        <input
            ref={fileInput}
            className="file-card__file-input"
            type="file"
            aria-hidden="true"
            style={{display: 'none'}}
        />
    </Card>;
}
