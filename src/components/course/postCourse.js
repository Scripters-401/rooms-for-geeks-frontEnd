/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/postCourseReducer'

const CorseForm = props => {


    const handleSubmitFun = e => {
        e.preventDefault();
        props.coursePost(
            props.sign.token,
            props.thePostCourse.courseName,
            props.thePostCourse.topic,
            props.thePostCourse.discription,
            props.thePostCourse.tutorial,
        );
    }

    return (
        <>
            <div>
                <form onSubmit={(e) => handleSubmitFun(e)}>
                    <h3>Add Course</h3>

                    <div>
                        <label>courseName</label>
                        <input
                            type="text"
                            name="courseName"
                            onChange={(e) => props.handleChangeCourse(e)}
                        />
                    </div>

                    <div>
                        <label>topic</label>
                        <input
                            type="text"
                            name="topic"
                            onChange={(e) => props.handleChangeCourse(e)}
                        />
                    </div>

                    <div>
                        <label>discription</label>
                        <input
                            type="text"
                            name="discription"
                            onChange={(e) => props.handleChangeCourse(e)}
                        />
                    </div>
                    <div>
                        <label>tutorial</label>
                        <input
                            type="text"
                            name="tutorial"
                            onChange={(e) => props.handleChangeCourse(e)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    sign: state.sign,
    thePostCourse: state.thePostCourse
});

const mapDispatchToProps = (dispatch, getState) => ({
    handleChangeCourse: (e) => dispatch(actions.handleChangeCourse(e)),

    coursePost: (token, courseName, topic, discription, tutorial) =>
        dispatch(actions.coursePost(token, courseName, topic, discription, tutorial)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CorseForm);