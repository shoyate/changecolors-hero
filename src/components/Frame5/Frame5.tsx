import { memo, useEffect} from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _3Icon } from './_3Icon.js';
import { AkarIconsInstagramFillIcon } from './AkarIconsInstagramFillIcon.js';
import { AkarIconsLinkedinFillIcon } from './AkarIconsLinkedinFillIcon.js';
import { AkarIconsTwitterFillIcon } from './AkarIconsTwitterFillIcon.js';
import { AkarIconsYoutubeFillIcon } from './AkarIconsYoutubeFillIcon.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon2 } from './Ellipse2Icon2.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { FeMessangerIcon } from './FeMessangerIcon.js';
import classes from './Frame5.module.css';
import { LogoIcon } from './LogoIcon.js';
import { makeSlider } from './slide.js'
import { animationLinear } from './animation.js'

interface Props {
  className?: string;
}
/* @figmaId 133:2 */
export const Frame5: FC<Props> = memo(function Frame5(props = {}) {
  useEffect(() => {
    let items = document.getElementById('frame14');
    console.log(items);
    makeSlider(items,0.4);
    animationLinear(document.getElementById("designerid"), 70, 100);
    animationLinear(document.getElementById("developerid"), 70, 100);
  }, []);
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon} />
      </div>
      <div className={classes.header}>
        <div className={classes.home}>Home</div>
        <div className={classes.about}>About</div>
        <div className={classes.work}>Work</div>
        <div className={classes.contact}>Contact</div>
      </div>
      <div className={classes.hero}>
        <div className={classes.imCanBayrakDesignerDeveloperBe}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>I’m Can Bayrak - </span>
            <span className={classes.label2} id="designerid">designer</span>
            <span className={classes.label3}>, </span>
            <span className={classes.label4} id="developerid">developer</span>
            <span className={classes.label5}> &amp; behavioral researcher.</span>
          </p>
        </div>
        <div className={classes.frame11}>
          <div className={classes.vector}>
            <div className={classes.akarIconsTwitterFill}>
              <AkarIconsTwitterFillIcon className={classes.icon2} />
            </div>
          </div>
          <div className={classes.vector_3}>
            <div className={classes.akarIconsInstagramFill}>
              <AkarIconsInstagramFillIcon className={classes.icon3} />
            </div>
          </div>
          <div className={classes.vector_4}>
            <div className={classes.akarIconsYoutubeFill}>
              <AkarIconsYoutubeFillIcon className={classes.icon4} />
            </div>
          </div>
          <div className={classes.vector_2}>
            <div className={classes.akarIconsLinkedinFill}>
              <AkarIconsLinkedinFillIcon className={classes.icon5} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.about2}>
        <div className={classes.about_2}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label6}>Lorem ipsum dolor sit amet, </span>
            <span className={classes.label7}>consectetur</span>
            <span className={classes.label8}> adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. </span>
            <span className={classes.label9}>Pellentesque</span>
            <span className={classes.label10}>
              {' '}
              sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis{' '}
            </span>
            <span className={classes.label11}>imperdiet augue.</span>
            <span className={classes.label12}> </span>
          </p>
          <div className={classes.textBlock}>
            <p className={classes.labelWrapper3}></p>
          </div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper4}>
              <span className={classes.label13}>Vestibulum</span>
              <span className={classes.label14}> </span>
              <span className={classes.label15}>auctor ornare leo</span>
              <span className={classes.label16}>
                , non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                Pellentesque commodo lacus at sodales sodales.{' '}
              </span>
              <span className={classes.label17}>Quisque sagittis </span>
              <span className={classes.label18}>
                orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis
                id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              </span>
            </p>
          </div>
          <div className={classes.textBlock3}>
            <p></p>
          </div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
        <div className={classes.rectangle1}></div>
      </div>
      <div className={classes.frame13}>
        <div className={classes.footer}>
          <div className={classes.footer2}>
            <div className={classes.frame5}>
              <div className={classes.frame2}>
                <div className={classes.availableForSelectFreelanceOpp}>
                  <div className={classes.textBlock5}>Available for select </div>
                  <div className={classes.textBlock6}>freelance opportunities.</div>
                </div>
                <div className={classes.haveAnExcitingProjectYouNeedHe}>
                  <div className={classes.textBlock7}>Have an exciting project you need help with?</div>
                  <div className={classes.textBlock8}>Send me an email or contact me via instant message!</div>
                </div>
                <div className={classes.frame4}>
                  <div className={classes.frame3}>
                    <div className={classes.frame6}>
                      <div className={classes.feMessanger}>
                        <FeMessangerIcon className={classes.icon6} />
                      </div>
                      <div className={classes.messageMeNow}>Message me now!</div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame7}>
                  <div className={classes.helloYcanbayrakCom}>hello@ycanbayrak.com</div>
                  <div className={classes.line1}></div>
                </div>
              </div>
            </div>
            <div className={classes.frame8}>
              <div className={classes.frame82}>
                <div className={classes.vector2}>
                  <div className={classes.vector3}></div>
                </div>
                <div className={classes.ellipse1}>
                  <Ellipse1Icon className={classes.icon7} />
                </div>
              </div>
              <div className={classes.loremIpsumDolorSitAmetConsecte}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum
                eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at
                sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu
                eros, eget tempus orci facilisis id.
              </div>
              <div className={classes.cTOYukariAsagiJohnDoe}>CTO @ YukariAsagi - John Doe </div>
            </div>
            <div className={classes.frame12}>
              <div className={classes.frame9}>
                <div className={classes.frame83}>
                  <div className={classes.vector4}></div>
                  <div className={classes.ellipse2}>
                    <Ellipse2Icon className={classes.icon8} />
                  </div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
                </div>
                <div className={classes.cEOOyleBoyleJohnDoe}>CEO @ OyleBoyle - John Doe </div>
              </div>
              <div className={classes.frame84}>
                <div className={classes.frame85}>
                  <div className={classes.vector5}>
                    <div className={classes.vector6}></div>
                  </div>
                  <div className={classes.ellipse22}>
                    <Ellipse2Icon2 className={classes.icon9} />
                  </div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.{' '}
                </div>
                <div className={classes.cEOOyleBoyleJohnDoe2}>CEO @ OyleBoyle - John Doe </div>
              </div>
            </div>
            <div className={classes.frame86}>
              <div className={classes.rectangle8}></div>
              <div className={classes.letsWorkTogether}>Let’s work together!</div>
            </div>
          </div>
        </div>
        <div className={classes.frame}>
          <div className={classes.selectedWork}>Selected Work</div>
        </div>
        <div className={classes._3}>
          <_3Icon className={classes.icon10} />
        </div>
        <div className={classes.frame14} id="frame14">
          <div className={classes.group31}></div>
          <div className={classes.frame16}>
            <div className={classes._1}></div>
            <div className={classes.workInProgressSaaS}>Work in progress SaaS.</div>
            <div className={classes.taskManagementAppForStartups}>Task management app for startups.</div>
          </div>
          <div className={classes.frame17}>
            <div className={classes._12}></div>
            <div className={classes.caseStudy}>Case Study.</div>
            <div className={classes.lilac_iMac1}></div>
            <div className={classes.adminDashboardForHouseRenderin}>Admin dashboard for house rendering pipeline</div>
          </div>
          <div className={classes.frame18}>
            <div className={classes._13}></div>
            <div className={classes.caseStudy2}>Case Study.</div>
            <div className={classes.myOwnPortfolioWebsiteBuiltWith}>
              <div className={classes.textBlock9}>My own portfolio website</div>
              <div className={classes.textBlock10}>built with technologies React, Next.js and Typescript </div>
            </div>
          </div>
          <div className={classes.frame19}>
            <div className={classes._14}></div>
            <div className={classes.caseStudy3}>Case Study.</div>
            <div className={classes.personalManagementAppForEmploy}>Personal management app for employees</div>
            <div className={classes.red_iMac1}></div>
          </div>
          <div className={classes.frame20}>
            <div className={classes._15}></div>
            <div className={classes.caseStudy4}>Case Study.</div>
            <div className={classes.stillEmpty}>Still empty.</div>
          </div>
          <div className={classes.frame21}>
            <div className={classes._16}></div>
            <div className={classes.caseStudy5}>Case Study.</div>
            <div className={classes.workInProgress}>Work in progress</div>
          </div>
          <div className={classes.frame212}>
            <div className={classes._17}></div>
            <div className={classes.caseStudy6}>Case Study.</div>
            <div className={classes.workInProgress2}>Work in progress</div>
          </div>
          <div className={classes.frame15}>
            <div className={classes.rectangle14}></div>
            <div className={classes._18}></div>
            <div className={classes.caseStudy7}>Case Study.</div>
            <div className={classes.myPortfolioWebsiteBuiltInReact}>My portfolio website built in React.js</div>
            <div className={classes.iMac_black1}></div>
          </div>
        </div>
      </div>
    </div>
  );
});
