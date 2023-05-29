import React from 'react';


export default class NoteInput extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        console.log(this.state)
    }

    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <p className='note-input__title__char-limit'>sisa karakter : {50-this.state.title.length}</p>
                <input class="note-input-title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50} required/>
                <textarea class="note-input-body" type="text" placeholder="Tuliskan catatan mu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} reuqired />
                <button type="submit">Buat Catatan</button>
            </form>
        )
    }
}

