import React from 'react';

type TypesenseLogoTranslations = Partial<{
  searchByText: string;
}>;

type TypesenseLogoProps = {
  translations?: TypesenseLogoTranslations;
};

export function TypesenseLogo({ translations = {} }: TypesenseLogoProps) {
  const { searchByText = 'Search by' } = translations;

  return (
    <a
      href={`https://typesense.org/?utm_source=${window.location.hostname}&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="DocSearch-Label">{searchByText}</span>
      <svg
        fill="none"
        height="18"
        viewBox="0 0 80 18"
        width="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#1035bc">
          <path d="m4.82356 5.166c.03534.18.053.354.053.522 0 .156-.01766.324-.053.504l-2.24393-.018v6.048c0 .504.2297.756.68908.756h1.34282c.08246.204.12368.408.12368.612s-.01177.33-.03533.378c-.54184.072-1.10135.108-1.67853.108-1.14258 0-1.71387-.498-1.71387-1.494v-6.408l-1.2544739.018c-.0353374-.18-.0530061-.348-.0530061-.504 0-.168.0176687-.342.0530061-.522l1.2544739.018v-1.89c0-.324.04712-.552.14135-.684.09424-.144.27681-.216.54773-.216h.47706l.10601.108v2.7z" />
          <path d="m13.3733 5.256-2.4206 8.442c-.4476 1.548-.9247 2.64-1.4312 3.276s-1.26625.954-2.27926.954c-.51828 0-.99534-.078-1.43117-.234-.03533-.336.0589-.66.2827-.972.36516.132.75387.198 1.16614.198.62429 0 1.10135-.216 1.43116-.648.32982-.432.63019-1.104.90111-2.016l.053-.18c-.30625-.024-.54184-.096-.70674-.216-.15313-.12-.2827-.342-.38872-.666l-2.47362-7.92c.36516-.156.6243-.234.77743-.234.34159 0 .57129.21.68908.63l1.39583 4.518c.04711.144.31803 1.08.81276 2.808.02356.084.08245.126.17668.126l2.15562-7.956c.1531-.048.3533-.072.6007-.072.2591 0 .4771.036.6537.108z" />
          <path d="m16.7683 13.41v3.564c0 .324-.0471.552-.1414.684-.0942.144-.2827.216-.5653.216h-.4771l-.106-.108v-12.546l.106-.108h.4594c.2827 0 .4711.078.5654.234.106.144.159.384.159.72v.09c.7067-.804 1.549-1.206 2.5266-1.206 1.0013 0 1.7551.414 2.2616 1.242.5065.816.7598 1.95.7598 3.402 0 .708-.0943 1.344-.2827 1.908-.1767.564-.4182 1.044-.7244 1.44-.2945.384-.6361.684-1.0248.9-.3887.204-.7892.306-1.2015.306-.8128 0-1.5843-.246-2.3146-.738zm0-5.85v4.626c.7185.54 1.3958.81 2.0319.81s1.1602-.288 1.5725-.864.6184-1.446.6184-2.61c0-.576-.053-1.074-.159-1.494-.0942-.432-.2238-.786-.3887-1.062-.1649-.288-.3593-.498-.5831-.63-.212-.144-.4417-.216-.6891-.216-.4711 0-.9187.126-1.3428.378-.424.252-.7774.606-1.0601 1.062z" />
          <path d="m31.2631 9.99h-5.4773c.0589 2.04.8187 3.06 2.2793 3.06.801 0 1.655-.252 2.562-.756.2591.24.4181.546.477.918-.9659.672-2.0496 1.008-3.251 1.008-.6125 0-1.1367-.114-1.5725-.342-.4359-.24-.7951-.564-1.0778-.972-.271-.42-.4712-.912-.6008-1.476-.1295-.564-.1943-1.182-.1943-1.854 0-.684.0765-1.308.2297-1.872.1649-.564.4005-1.05.7067-1.458.3063-.408.6714-.726 1.0955-.954.4358-.228.9305-.342 1.4841-.342.5419 0 1.0248.102 1.4489.306.4358.192.7951.462 1.0778.81.2944.336.5183.744.6714 1.224.1531.468.2297.972.2297 1.512 0 .216-.0118.426-.0354.63-.0117.192-.0294.378-.053.558zm-5.4773-1.026h4.2405v-.234c0-.828-.1708-1.494-.5124-1.998s-.854-.756-1.5372-.756c-.6714 0-1.1955.27-1.5725.81-.3651.54-.5713 1.266-.6184 2.178z" />
          <path d="m33.0818 13.374c.0117-.264.0824-.552.212-.864.1413-.324.3004-.576.477-.756.9306.516 1.7492.774 2.456.774.3887 0 .7009-.078.9364-.234.2474-.156.3711-.366.3711-.63 0-.42-.3181-.756-.9541-1.008l-.9895-.378c-1.4841-.552-2.2262-1.434-2.2262-2.646 0-.432.0765-.816.2297-1.152.1649-.348.3887-.642.6714-.882.2945-.252.6419-.444 1.0424-.576s.8481-.198 1.3428-.198c.2238 0 .4712.018.7421.054.2827.036.5654.09.8481.162.2827.06.5537.132.8128.216s.4829.174.6714.27c0 .3-.0589.612-.1767.936s-.2768.564-.477.72c-.9306-.42-1.7375-.63-2.4207-.63-.3062 0-.5477.078-.7244.234-.1767.144-.265.336-.265.576 0 .372.2945.666.8834.882l1.0778.396c.7775.276 1.3546.654 1.7316 1.134.3769.48.5654 1.038.5654 1.674 0 .852-.3122 1.536-.9365 2.052-.6243.504-1.5195.756-2.6856.756-1.1426 0-2.2145-.294-3.2157-.882z" />
          <path d="m48.5671 10.296h-4.8765c.0353.66.1826 1.182.4417 1.566.2709.372.7362.558 1.3958.558.6832 0 1.4665-.204 2.35-.612.3416.36.5595.834.6537 1.422-.9423.684-2.0731 1.026-3.3924 1.026-1.2486 0-2.1968-.39-2.8446-1.17-.6361-.792-.9542-1.962-.9542-3.51 0-.72.0825-1.368.2474-1.944.1649-.588.4064-1.086.7244-1.494.3181-.42.7068-.744 1.1662-.972.4593-.228.9835-.342 1.5725-.342.6007 0 1.1308.096 1.5902.288.4593.18.8481.444 1.1661.792.318.336.5536.738.7067 1.206.1649.468.2474.978.2474 1.53 0 .3-.0177.588-.053.864-.0353.264-.0825.528-.1414.792zm-3.41-3.78c-.9188 0-1.4135.708-1.4842 2.124h2.933v-.216c0-.576-.1178-1.038-.3534-1.386-.2355-.348-.6007-.522-1.0954-.522z" />
          <path d="m58.2504 7.992v3.924c0 .768.1237 1.338.3711 1.71-.377.336-.8305.504-1.3605.504-.5065 0-.854-.114-1.0425-.342-.1884-.24-.2827-.612-.2827-1.116v-4.194c0-.54-.0648-.918-.1943-1.134-.1296-.216-.3711-.324-.7244-.324-.6243 0-1.2074.288-1.7492.864v6.12c-.1767.036-.3652.06-.5654.072-.1885.012-.3829.018-.5831.018-.2003 0-.4005-.006-.6007-.018-.1885-.012-.3711-.036-.5478-.072v-8.91l.106-.126h.8835c.6596 0 1.0719.36 1.2368 1.08.8599-.756 1.7138-1.134 2.5619-1.134s1.4724.282 1.8729.846c.4123.552.6184 1.296.6184 2.232z" />
          <path d="m60.1039 13.374c.0117-.264.0824-.552.212-.864.1413-.324.3003-.576.477-.756.9306.516 1.7492.774 2.456.774.3887 0 .7008-.078.9364-.234.2474-.156.3711-.366.3711-.63 0-.42-.3181-.756-.9541-1.008l-.9895-.378c-1.4842-.552-2.2262-1.434-2.2262-2.646 0-.432.0765-.816.2296-1.152.165-.348.3888-.642.6715-.882.2944-.252.6419-.444 1.0424-.576s.8481-.198 1.3428-.198c.2238 0 .4712.018.7421.054.2827.036.5654.09.8481.162.2827.06.5536.132.8128.216.2591.084.4829.174.6714.27 0 .3-.0589.612-.1767.936s-.2768.564-.4771.72c-.9305-.42-1.7374-.63-2.4206-.63-.3062 0-.5477.078-.7244.234-.1767.144-.265.336-.265.576 0 .372.2945.666.8834.882l1.0778.396c.7774.276 1.3546.654 1.7315 1.134.377.48.5655 1.038.5655 1.674 0 .852-.3122 1.536-.9365 2.052-.6243.504-1.5195.756-2.6856.756-1.1426 0-2.2145-.294-3.2157-.882z" />
          <path d="m75.5892 10.296h-4.8765c.0353.66.1826 1.182.4417 1.566.2709.372.7362.558 1.3958.558.6832 0 1.4665-.204 2.35-.612.3416.36.5595.834.6537 1.422-.9423.684-2.0731 1.026-3.3924 1.026-1.2486 0-2.1968-.39-2.8447-1.17-.636-.792-.9541-1.962-.9541-3.51 0-.72.0825-1.368.2474-1.944.1649-.588.4064-1.086.7244-1.494.318-.42.7068-.744 1.1662-.972.4593-.228.9835-.342 1.5725-.342.6007 0 1.1308.096 1.5902.288.4593.18.8481.444 1.1661.792.318.336.5536.738.7067 1.206.1649.468.2474.978.2474 1.53 0 .3-.0177.588-.053.864-.0353.264-.0825.528-.1414.792zm-3.41-3.78c-.9188 0-1.4135.708-1.4842 2.124h2.933v-.216c0-.576-.1178-1.038-.3534-1.386-.2355-.348-.6007-.522-1.0954-.522z" />
          <path d="m78.3287 16.524v-16.4699996c.1767-.0360003.3769-.0540004.6007-.0540004.2356 0 .4535.0180001.6538.0540004v16.4699996c-.2003.036-.4182.054-.6538.054-.2238 0-.424-.018-.6007-.054z" />
        </g>
      </svg>
    </a>
  );
}
