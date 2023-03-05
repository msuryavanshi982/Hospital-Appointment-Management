import React from 'react'

export default function Form() {
    return (
        <div>
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-row">
                    <div
                        class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8115986"
                        data-id="8115986"
                        data-element_type="column"
                    >
                        <div
                            class="elementor-column-wrap elementor-element-populated"
                        >
                            <div class="elementor-widget-wrap">
                                <div
                                    class="elementor-element elementor-element-48aa2d4 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                    data-id="48aa2d4"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                >
                                    <div class="elementor-widget-container">
                                        <h2
                                            class="elementor-heading-title elementor-size-default"
                                        >
                                            Book Appointment with
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    class="elementor-element elementor-element-967ccf1 elementor-widget__width-auto elementor-widget elementor-widget-heading"
                                    data-id="967ccf1"
                                    data-element_type="widget"
                                    data-widget_type="heading.default"
                                >
                                    <div class="elementor-widget-container">
                                        <h2
                                            class="elementor-heading-title elementor-size-default"
                                        >
                                            Dr. B Ramesh
                                        </h2>
                                    </div>
                                </div>
                                <div
                                    class="elementor-element elementor-element-c1b1bf0 elementor-button-align-stretch elementor-widget elementor-widget-form"
                                    data-id="c1b1bf0"
                                    data-element_type="widget"
                                    data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                                    data-widget_type="form.default"
                                >
                                    <div class="elementor-widget-container">
                                        <form
                                            class="elementor-form"
                                            method="post"
                                            name="New Form"
                                        >
                                            <input
                                                type="hidden"
                                                name="post_id"
                                                value="1578"
                                            />
                                            <input
                                                type="hidden"
                                                name="form_id"
                                                value="c1b1bf0"
                                            />
                                            <input
                                                type="hidden"
                                                name="referer_title"
                                                value="Dr. B Ramesh"
                                            />

                                            <input
                                                type="hidden"
                                                name="queried_id"
                                                value="1702"
                                            />

                                            <div
                                                class="elementor-form-fields-wrapper elementor-labels-above"
                                            >
                                                <div
                                                    class="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100"
                                                >
                                                    <input
                                                        size="1"
                                                        type="text"
                                                        name="form_fields[name]"
                                                        id="form-field-name"
                                                        class="elementor-field elementor-size-sm elementor-field-textual"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div
                                                    class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required"
                                                >
                                                    <input
                                                        size="1"
                                                        type="email"
                                                        name="form_fields[email]"
                                                        id="form-field-email"
                                                        class="elementor-field elementor-size-sm elementor-field-textual"
                                                        placeholder="Email"
                                                        required="required"
                                                        aria-required="true"
                                                    />
                                                </div>
                                                <div
                                                    class="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_9524675 elementor-col-100 elementor-field-required"
                                                >
                                                    <input
                                                        size="1"
                                                        type="tel"
                                                        name="form_fields[field_9524675]"
                                                        id="form-field-field_9524675"
                                                        class="elementor-field elementor-size-sm elementor-field-textual"
                                                        placeholder="Mobile Number"
                                                        required="required"
                                                        aria-required="true"
                                                        pattern="[0-9()#&amp;+*-=.]+"
                                                        title="Only numbers and phone characters (#, -, *, etc) are accepted."
                                                    />
                                                </div>
                                                <div
                                                    class="elementor-field-type-hidden elementor-field-group elementor-column elementor-field-group-field_b0d5626 elementor-col-100"
                                                >
                                                    <input
                                                        size="1"
                                                        type="hidden"
                                                        name="form_fields[field_b0d5626]"
                                                        id="form-field-field_b0d5626"
                                                        class="elementor-field elementor-size-sm elementor-field-textual"
                                                        value="Dr. B Ramesh"
                                                    />
                                                </div>
                                                <div
                                                    class="elementor-field-type-date elementor-field-group elementor-column elementor-field-group-field_304a6c2 elementor-col-50 elementor-field-required"
                                                >
                                                    <input
                                                        type="date"
                                                        name="form_fields[field_304a6c2]"
                                                        id="form-field-field_304a6c2"
                                                        class="elementor-field elementor-size-sm elementor-field-textual elementor-date-field elementor-use-native"
                                                        placeholder="Select Date"
                                                        required="required"
                                                        aria-required="true"
                                                        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                                        min="2021-10-30"
                                                    />
                                                </div>
                                                <div
                                                    class="elementor-field-type-time elementor-field-group elementor-column elementor-field-group-field_df6c78b elementor-col-50 elementor-field-required"
                                                >
                                                    <input
                                                        type="time"
                                                        name="form_fields[field_df6c78b]"
                                                        id="form-field-field_df6c78b"
                                                        class="elementor-field elementor-size-sm elementor-field-textual elementor-time-field elementor-use-native"
                                                        placeholder="Select Time"
                                                        required="required"
                                                        aria-required="true"
                                                    />
                                                </div>
                                                <div
                                                    class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons"
                                                >
                                                    <button
                                                        type="submit"
                                                        class="elementor-button elementor-size-sm"
                                                    >
                                                        <span>
                                                            <span class="elementor-button-icon">
                                                            </span>
                                                            <span class="elementor-button-text"
                                                            >Send</span
                                                            >
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
