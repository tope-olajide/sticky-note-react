import NoteCard from "./NoteCard";
import { Theme, INote } from '../typings'
import { useState } from "react";
import NoStickyNotes from "./NoStickyNotes";
const NoteContainer = () => {
    const defaultNoteData = {
        content: "",
        color: Theme.Yellow,
        id: `${Date.now()}`,
        isMaximized: false,
        isDeleteNoteConfirmationVisible: false,
        isSaved: false,
        isSaving: false,
        isError: true,
    }
    const [notes, setNotes] = useState<Array<INote>>([]);

    const createNote = () => {
        setNotes([...notes, defaultNoteData]);
    }

    const changeColor = (noteId: string, color: Theme) => {
        console.log(noteId, color);
        const updatedNotes = notes.map((note: INote) => {
            if (note.id === noteId) {
                return {
                    ...note, color
                }
            }
            return note
        })
        setNotes(updatedNotes)
    }

    const toggleFullscreen = (noteId: string) => {
        const updatedNotes = notes.map((note: INote) => {
            if (note.id === noteId) {
                return { ...note, isMaximized: !note.isMaximized }
            }
            return note
        })
        setNotes(updatedNotes)
    }

    const deleteNote = (noteId: string) => {
        const filteredNotes = notes.filter((note: INote) => {
            return note.id !== noteId;
        })
        setNotes(filteredNotes)
    }

    const toggleDeleteNoteConfirmationMessage = (noteId: string) => {
        const updatedNotes = notes.map((note: INote) => {
            if (note.id === noteId) {
                return { ...note, isDeleteNoteConfirmationVisible: !note.isDeleteNoteConfirmationVisible }
            }
            return note
        })
        setNotes(updatedNotes)
        console.log(updatedNotes)
    }

    if (!notes.length) {
        return (
            <>
            <section className="notes-container">
                <NoStickyNotes
                    createNote={createNote}
                />
                </section>
            </>
        )
    }


    return (
        <>
            <section className="notes-container">
                {notes.map((note: INote) => {
                    return (
                        <NoteCard
                            createNote={createNote}
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            isMaximized={note.isMaximized}
                            contents ={note.content}
                            isSaved={note.isSaved}
                            isSaving={note.isSaving}
                            isError={note.isError}
                            changeColor={changeColor}
                            toggleFullscreen={toggleFullscreen}
                            isDeleteNoteConfirmationVisible={note.isDeleteNoteConfirmationVisible}
                            toggleDeleteNoteConfirmationMessage = {toggleDeleteNoteConfirmationMessage}
                            deleteNote = {deleteNote}

                        />
                    )
                })}
            </section>
        </>
    )
}

export default NoteContainer
