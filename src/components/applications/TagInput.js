/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

class TagInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
        };
    }

    handleDelete = (i) => {
        const { tags } = this.state;
        this.setState({
         tags: tags.filter((tag, index) => index !== i),
        });
    }

    handleAddition = (tag) =>  {
        const { tags } = this.state;
        if(tags.length !== 5){
            this.setState(state => ({ tags: [...state.tags, tag] }));
        }
    }

    render() {
        const { tags } = this.state;
        return (
            <div>
                <ReactTags tags={tags}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    delimiters={delimiters}
                    allowDeleteFromEmptyInput={false}
                    placeholder='Add New Item'
                    name={tags.length !== 5 ? `input-tag` : `input-tag hide`}
                    />
            </div>
        )
    }
};


export default TagInput;