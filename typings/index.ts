export enum Theme {
    Yellow = "yellow",
    Green = "green",
    Pink = "pink",
    Purple = "purple",
    Blue = "blue",
    Gray = "gray",
    Charcoal = "charcoal"
}

export interface INote {
    content: string;
    color: Theme;
    id: string;
    isMaximized: boolean;
    isDeleteNoteConfirmationVisible:boolean;
    isSaved: boolean;
    isSaving: boolean;
    isError: boolean;
}

export interface INoteCardProps {
    createNote(): void;
    id:string;
    color:string;
    isMaximized:boolean;
    contents: string;
    isSaved: boolean;
    isSaving: boolean;
    isError: boolean;
    changeColor(id:string, color:Theme): void;
    toggleFullscreen(noteId:string):void;
    isDeleteNoteConfirmationVisible:boolean,
    toggleDeleteNoteConfirmationMessage(id:string):void;
    deleteNote(id:string):void;
}
export interface INoStickyNoteProps{
    createNote():void
}