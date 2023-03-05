import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../store/data.json';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Doctor() {
    let { id } = useParams();
    let doctors = data.doctor.filter((e)=>{
        return e.id===id;
    })[0]
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    // console.log(Doctor)
    return (
        <div>
            <main id="main" class="site-main clr" role="main">
                <div data-elementor-type="single-post" data-elementor-id="1572" class="elementor elementor-1572 elementor-location-single post-1702 doctors type-doctors status-publish hentry specialties-ivf-treatment entry" data-elementor-settings="[]">
                    <div class="elementor-section-wrap">
                        <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-3c8f5dd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            >
                            <div class="elementor-background-overlay"></div>
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-row">
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-811a170"
                                        data-id="811a170" data-element_type="column">
                                        <div class="elementor-column-wrap elementor-element-populated">
                                            <div class="elementor-widget-wrap">
                                                <div class="elementor-element elementor-element-e40ac32 elementor-widget elementor-widget-image"
                                                    data-id="e40ac32" data-element_type="widget"
                                                    data-widget_type="image.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-image">
                                                            <img src={doctors.image}
                                                                title={doctors.name}
                                                                alt="photograph" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f626829"
                                        data-id="f626829" data-element_type="column">
                                        <div class="elementor-column-wrap elementor-element-populated">
                                            <div class="elementor-widget-wrap">
                                                <div class="elementor-element elementor-element-f3adbd4 elementor-invisible elementor-widget elementor-widget-heading"
                                                    data-id="f3adbd4" data-element_type="widget"
                                                    data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h2 class="elementor-heading-title elementor-size-default">{doctors.name}</h2>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-06e66cb elementor-invisible elementor-widget elementor-widget-heading"
                                                    data-id="06e66cb" data-element_type="widget"
                                                    data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h2 class="elementor-heading-title elementor-size-default">
                                                            Founder, Medical Director</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-19d2904 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="19d2904" data-element_type="section">
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-row">
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-784e444"
                                        data-id="784e444" data-element_type="column">
                                        <div class="elementor-column-wrap elementor-element-populated">
                                            <div class="elementor-widget-wrap">
                                                <div class="elementor-element elementor-element-3a286bb elementor-invisible elementor-widget elementor-widget-text-editor"
                                                    data-id="3a286bb" data-element_type="widget"
                                                    data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200}"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-text-editor elementor-clearfix">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4123c84"
                                        data-id="4123c84" data-element_type="column">
                                        <div class="elementor-column-wrap">
                                            <div class="elementor-widget-wrap">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-54ac496 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="54ac496" data-element_type="section"
                            data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                            <div class="elementor-container elementor-column-gap-default">
                                <div class="elementor-row">
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dac3704"
                                        data-id="dac3704" data-element_type="column"
                                        data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                        <div class="elementor-column-wrap elementor-element-populated">
                                            <div class="elementor-widget-wrap">
                                                <div class="elementor-element elementor-element-8ca2c36 elementor-invisible elementor-widget elementor-widget-text-editor"
                                                    data-id="8ca2c36" data-element_type="widget"
                                                    data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200}"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-text-editor elementor-clearfix">
                                                      
                                                            <div class="icoDoc row">
                                                                <div class="col-lg-4 col-sm-4"></div>
                                                                <div class="col-lg-8 col-sm-8">
                                                                    <p><strong>Education</strong> : {doctors.Education}</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="icoDoc row">
                                                                <div class="col-lg-4 col-sm-4"></div>
                                                                <div class="col-lg-8 col-sm-8">
                                                                    <p><strong>Specialization</strong> : {doctors.Specialization}</p>
                                                                </div>
                                                            </div>
                                                           
                                                            <div class="icoDoc row">
                                                                <div class="col-lg-4 col-sm-4"></div>
                                                                <div class="col-lg-8 col-sm-8">
                                                                    <p><strong>Experience</strong> : {doctors.Experience}</p>
                                                                </div>
                                                            </div>
                                                          
                                                            <div class="icoDoc row">
                                                                <div class="col-lg-4 col-sm-4"></div>
                                                                <div class="col-lg-8 col-sm-8">
                                                                    <p><strong>Location</strong> : {doctors.Location}</p>
                                                                </div>
                                                            </div>
                                                         
                                                            <div class="icoDoc row">
                                                                <div class="col-lg-4 col-sm-4"></div>
                                                                <div class="col-lg-8 col-sm-8">
                                                                    <p><strong>Registration</strong> : {doctors.Registration}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-04ceca6 elementor-align-left appoBtn elementor-widget elementor-widget-button"
                                                    data-id="04ceca6" data-element_type="widget"
                                                    data-widget_type="button.default">
                                                    <div class="elementor-widget-container">
                                                        <div 
                                                        onClick={openModal}
                                                         class="elementor-button-wrapper">
                                                            <a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE1NzgiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D"
                                                                class="elementor-button-link elementor-button elementor-size-md"
                                                                role="button">
                                                                <span class="elementor-button-content-wrapper">
                                                                    <span class="elementor-button-text">Book
                                                                        Appointment</span>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-0070323 elementor-invisible elementor-widget elementor-widget-text-editor"
                                                    data-id="0070323" data-element_type="widget"
                                                    data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200}"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-text-editor elementor-clearfix">
                                                            <p class="responsive-video-wrap clr"><iframe
                                                                    title="Altius Hospitals - 150 Bedded Tertiary Care Hospital in Bengaluru  - A place safer than home"
                                                                    width="1200" height="675"
                                                                    src="https://www.youtube.com/embed/ZrfshZz57tA?feature=oembed"
                                                                    frameborder="0"
                                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                    allowfullscreen></iframe></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d49203f"
                                        data-id="d49203f" data-element_type="column">
                                        <div class="elementor-column-wrap elementor-element-populated">
                                            <div class="elementor-widget-wrap">
                                                <div class="elementor-element elementor-element-2449e18 elementor-widget elementor-widget-heading"
                                                    data-id="2449e18" data-element_type="widget"
                                                    data-widget_type="heading.default">
                                                    <div class="elementor-widget-container">
                                                        <h2 class="elementor-heading-title elementor-size-default">About
                                                            Doctor</h2>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-ffceb2d elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                                                    data-id="ffceb2d" data-element_type="widget"
                                                    data-widget_type="divider.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-divider">
                                                            <span class="elementor-divider-separator">
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-element elementor-element-a6b676e elementor-invisible elementor-widget elementor-widget-text-editor"
                                                    data-id="a6b676e" data-element_type="widget"
                                                    data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:200}"
                                                    data-widget_type="text-editor.default">
                                                    <div class="elementor-widget-container">
                                                        <div class="elementor-text-editor elementor-clearfix">
                                                            {doctors.Abouts}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </main>
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
  
      </Modal>
        </div>
    )
}
