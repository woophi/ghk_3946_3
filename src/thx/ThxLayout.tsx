import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Typography } from '@alfalab/core-components/typography';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = ({ selectedEns }: { selectedEns: boolean }) => {
  return (
    <>
      <div className={thxSt.container}>
        <div className={thxSt.rocket}>
          <CDNIcon className={thxSt.icon} name={selectedEns ? 'glyph_screwdriver-paint-brush_m' : 'glyph_briefcase_m'} />
        </div>

        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          {selectedEns
            ? 'Страховка позиции по данному инструменту не доступна'
            : 'Попробуйте подать торговое поручение иным способом'}
        </Typography.TitleResponsive>
        {selectedEns && (
          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Попробуйте подать заявку без страхования позиции
          </Typography.Text>
        )}
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="a-investments://CA?type=isinFromCurrent&value=RU0009029540"
          onClick={() => window.gtag('event', 'Buy_no_insurance_3946_click_var3')}
        >
          Подать заявку
        </ButtonMobile>
      </div>
    </>
  );
};
