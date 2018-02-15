/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
const { withInstanceId } = wp.components;
const { InspectorControls} = wp.blocks;
const { BaseControl } = InspectorControls;
const { Component } = wp.element;

/**
 * Internal dependencies
 */
import { postTypes, validatePostType } from '../data';

function getPostTypeObjects() {
	let postTypeOjects = [];

	for (var key in postTypes) {
		if (postTypes.hasOwnProperty(key)) {
			postTypeOjects.push({
				post_type: key,
				label: postTypes[key],
				checked: false,
			});
		}
	}

	return postTypeOjects;
}

class PostTypeControl extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			items: getPostTypeObjects()
		}
	}

	onChange( index, e ) {
		let newItems = this.state.items.slice();
		newItems[index].checked = !newItems[index].checked
		this.setState({
			items: newItems
		});

		const checked = this.state.items.filter( item => item.checked );
		const postTypes = checked.map( (obj) => obj.post_type );

		if ( this.props.onChange ) {
			this.props.onChange( postTypes.join(',') );
		}
	}

	render() {
		const { label, help, instanceId, postTypes  } = this.props;
		const id = 'inspector-multi-checkbox-control-' + instanceId;

		let describedBy;
		if ( help ) {
			describedBy = id + '__help';
		}

		let postTypesArr = postTypes.split(",");
		postTypesArr = postTypesArr.filter( item => validatePostType( item ) );

		return ! isEmpty( this.state.items ) && (
			<BaseControl label={ label } id={ id } help={ help } className="blocks-radio-control">
				{ this.state.items.map( ( option, index ) =>
					<div
						key={ ( id + '-' + index ) }
						className="blocks-radio-control__option"
					>
						<input
							id={ ( id + '-' + index ) }
							className="blocks-multi-checkbox-control__input"
							type="checkbox"
							name={ id + '-' + index}
							value={ option.post_type }
							onChange={this.onChange.bind(this, index)}
							checked={ ! ( postTypesArr.indexOf( option.post_type ) === -1 ) }
							aria-describedby={ !! help ? id + '__help' : undefined }
						/>
						<label key={ option.post_type } htmlFor={ ( id + '-' + index ) }>
							{ option.label }
						</label>
					</div>
				) }
			</BaseControl>
		);
	}
}

export default withInstanceId( PostTypeControl );
