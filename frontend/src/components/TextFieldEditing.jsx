import {CardHeader, Link, MenuItem, TextField} from "@mui/material";

/*
* A component used for editing
* In default mode it displays the usual component (Text, Link, etc) that will display a property value
* In editing mode it will display a TextField that will allow the changing of that property value
* */
export default function TextFieldEditing({objectType, label, txtValue, editing, onChange, selectValues=[], nameValue=""}) {
    if (editing) {
        if (objectType === "TextArea") {
            return <TextField label={label} value={txtValue} size="small" margin="normal" fullWidth multiline maxRows={4} onChange={onChange} />
        }
        if (objectType === "Select") {
            return <TextField label="Country:" value={txtValue} size="small" margin="normal" fullWidth required
                       onChange={onChange} select>
                {selectValues.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </TextField>
        }
        return <TextField label={label} value={txtValue} size="small" margin="normal" fullWidth onChange={onChange} />
    } else {
        if (objectType === "CardHeader") {
            return <CardHeader title={txtValue} className="card-header" />
        } else if (objectType === "Link") {
            return <><b>{label}</b> <Link href={txtValue} target="_blank">{txtValue}</Link></>
        } else if (objectType === "TextArea") {
            return <><br/><br/>{txtValue}</>
        } else if (objectType === "TextField") {
            return <><b>{label}</b> {txtValue}<br/></>
        } else if (objectType === "Select") {
            return <><b>{label}</b> {nameValue}<br/></>
        }
    }
    return <></>
}