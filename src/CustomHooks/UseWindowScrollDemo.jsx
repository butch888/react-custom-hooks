import { useWindowScroll } from './useWindowScroll';

function UseWindowScrollDemo() {
  const [scroll, scrollTo] = useWindowScroll();
  
  return (
    <div>
      <div style={{position: 'fixed', width: '100%', backgroundColor: 'blue', zIndex: '1'}}>
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      </div>
      <p style={{position: 'absolute', top: '100px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatum rem corrupti facilis saepe qui inventore repudiandae repellat voluptas laboriosam quisquam dolor, illum atque. Sit obcaecati minima soluta iste voluptate.
      Error quam optio neque corporis aut sit ullam repellat? Blanditiis possimus expedita illo delectus, magnam dicta, tempora harum fugit vero culpa doloremque suscipit perferendis cum minus iste nemo, distinctio ducimus.
      Aut reprehenderit enim velit et minima, commodi nulla soluta eaque corrupti amet, sed hic distinctio aperiam, quasi cumque optio voluptas atque sapiente libero architecto laudantium unde labore quibusdam. Odio, vero.
      Dolor sint facilis saepe nulla nam dignissimos, eligendi, ipsa praesentium enim aliquid delectus libero. Dolore veritatis libero alias totam, labore ducimus quidem doloribus, eligendi dicta quasi vitae nulla vel porro.
      Amet, ea. Totam, repellat iste atque, aut esse omnis hic, sed sequi consequatur velit molestias! Quas similique dolore mollitia molestias, provident reiciendis illo, quod eius consequatur tempora quibusdam alias ratione.
      Quibusdam commodi tempora sapiente inventore eos. Et dolorum accusantium recusandae ipsam voluptate perferendis suscipit! Nulla, quia ab tempore facilis sed, repudiandae explicabo minima facere odio veniam similique doloribus quos ipsa!
      Facilis quibusdam dolorem exercitationem fugit iste, veniam atque, recusandae ex perspiciatis natus quos veritatis rerum. Dolor quam ipsam ipsa eveniet ullam, laudantium illo veniam dolorum, laboriosam ipsum magnam! Dicta, animi?
      Earum quod, doloribus eum maxime labore asperiores, necessitatibus nemo explicabo fugiat iusto quibusdam pariatur voluptatum ex eveniet quas. Odit doloremque ullam illo ipsam quo laudantium harum quis nisi, dolorum est.
      Culpa non assumenda odio suscipit perferendis consectetur illo obcaecati neque esse optio mollitia eligendi placeat quo omnis commodi aliquid praesentium laborum consequatur veritatis voluptas, aliquam pariatur facere beatae. Provident, voluptatem.
      Error, earum libero excepturi qui rem ducimus, quis omnis similique magni, dicta quo in sint perferendis voluptatibus est! Iste autem fugiat sit corrupti dolorem, blanditiis eaque! Voluptatibus molestiae dolores laboriosam.
      Mollitia eos dignissimos eius, vero laboriosam ipsum voluptatum blanditiis veniam porro animi iste repudiandae impedit nesciunt ex corporis minima ratione consectetur ad voluptate quia rerum praesentium delectus! Asperiores, deserunt consectetur!
      Architecto, delectus fuga. In maiores repudiandae deserunt tenetur tempora facilis placeat accusamus officia, fuga magnam autem veritatis doloremque repellendus debitis facere atque rem distinctio consequuntur consectetur? Sapiente esse necessitatibus numquam.
      Quos, voluptatem porro repudiandae ut debitis, ab amet reiciendis itaque voluptate fuga nostrum eaque, voluptas dolorum temporibus quibusdam ipsam harum quis molestiae. Similique beatae a officia qui sunt optio facere?
      Aliquam sit repellat, qui praesentium magnam quam quas, ratione voluptas, cumque cupiditate maxime eveniet ducimus illum esse. Repudiandae placeat impedit rem! Cumque maiores voluptatum officia saepe quo. Quod, praesentium. Modi?
      Amet impedit quo expedita minima ad autem maxime rem saepe eligendi doloribus numquam molestiae totam, facilis omnis, ea voluptate optio consequuntur hic officiis. Nemo nostrum corporis sed ratione veniam iure.
      Sed quo optio ea cupiditate veniam facilis, sint quis itaque officiis corporis laborum autem quos ducimus. Possimus perferendis nesciunt quasi. Culpa iste sunt eaque eius molestiae quos necessitatibus vel totam.
      Asperiores architecto modi id cumque distinctio corporis saepe nobis error voluptatem dignissimos at voluptas rerum, facere ab libero eos voluptate odit quibusdam tenetur! Natus, quisquam. Rem a ad quasi asperiores?
      Nobis fugit, repellat nisi reprehenderit incidunt autem asperiores! At, suscipit sit! A quod cupiditate culpa ipsa dignissimos omnis, nam cumque molestiae consequuntur vitae mollitia vel deserunt saepe aperiam cum voluptatibus.
      Officia, quos! Dicta vel repellendus officia, saepe architecto illum enim et hic dignissimos, debitis ullam iusto consequatur suscipit esse assumenda? Maiores quia suscipit pariatur eligendi officia quos ea tempora dolores.
      Mollitia dolores iste laboriosam repellendus nemo quibusdam voluptas inventore quam quae illum, enim quidem! Animi, esse? Quisquam aut asperiores quae neque. Voluptatum laudantium alias officia mollitia doloremque quidem tempora nihil?
      Laboriosam quia error omnis et minus delectus fugiat ea! Blanditiis beatae quaerat ex, ducimus cupiditate accusamus, cum doloremque optio ea qui, possimus quam non consequatur repellat? Vero quidem deserunt facere.
      Natus consectetur est impedit ab rerum aliquam dolorem explicabo! Dolore deleniti eaque vel cupiditate quod error vitae, quas nulla voluptatem repudiandae quos enim explicabo sed, nesciunt voluptas, adipisci nostrum corrupti!
      Ad deleniti facilis dolores asperiores laboriosam doloribus dicta iusto officia, rem quae perferendis a, tempore saepe natus perspiciatis ipsa enim similique iste dolor non. Inventore provident non veniam architecto ducimus!
      Veniam dicta rerum quasi dolorum corporis assumenda eligendi dolor tempora fugit reiciendis illum dignissimos sint itaque possimus nostrum voluptatibus pariatur nemo nihil odit quia dolore non, omnis enim similique. Porro?
      Odio praesentium maxime neque laboriosam in saepe officiis sint rem suscipit voluptatibus vero autem dolorum nesciunt, corrupti vitae expedita doloribus eius sapiente ad nisi velit maiores! Voluptatibus tenetur blanditiis ullam.
      Corrupti rerum iusto explicabo ipsum, sed est ratione repudiandae culpa velit earum, in impedit numquam qui, ullam non nostrum! Architecto earum ut dicta officiis possimus eum accusantium obcaecati nobis nam!
      Asperiores hic odit ad odio quaerat dolores aut facilis animi ab, ducimus ipsam dolore, voluptates quisquam aliquid voluptatibus harum accusantium vero doloribus commodi dolor nulla? Quas sapiente nam laborum aperiam?
      Numquam aperiam totam, nostrum eos neque praesentium ducimus ea nemo modi. Dicta animi a nesciunt molestias consequatur totam libero porro voluptates dignissimos illum accusamus delectus atque, id, nihil nemo sequi.
      Quasi quisquam sint ipsam est optio consequatur provident dicta fugiat ducimus sunt numquam possimus et vel nulla, corporis rerum obcaecati voluptatibus tempora accusantium enim error sit eligendi ullam. Quisquam, quas?
      Placeat eveniet et quis necessitatibus eum expedita esse itaque, quod natus earum adipisci aliquid magnam, molestiae neque impedit nulla quae praesentium harum cupiditate. Obcaecati perspiciatis, vitae unde beatae blanditiis temporibus!
      Ullam ducimus minima, quia voluptatem reiciendis quod consectetur saepe beatae necessitatibus perferendis quasi eaque aliquid optio culpa sapiente sit tempora quo recusandae facere, corrupti nisi praesentium amet doloribus? Doloremque, vel.
      Odio, repellat doloribus error ab consectetur ipsum similique ea, quos quia consequatur quod debitis. Ipsa illo tempora assumenda nisi eaque nobis ab, minus soluta praesentium? Facilis numquam eos reiciendis incidunt.
      Dolorem natus omnis, totam deserunt iste optio facere officia! A sunt officia neque, quae repudiandae vel consectetur harum, voluptate cum distinctio molestias? Repellat laudantium nihil aliquam modi quasi, obcaecati quia.
      Alias, qui? Incidunt quis saepe numquam soluta odit ad autem cumque, expedita blanditiis dolore nam recusandae, cum libero veniam! Laboriosam eaque quasi eveniet velit explicabo, veniam rerum in atque quod?
      Repellat quaerat, consequatur ipsam tenetur doloribus ratione facere ipsa reiciendis et commodi doloremque deleniti libero veniam rem nulla harum? Nisi quibusdam quos praesentium cupiditate incidunt omnis corporis quam laudantium ullam!
      Excepturi illum omnis reiciendis odit corrupti aperiam quo, fugiat pariatur minima ipsam? Deleniti ipsum assumenda iure aperiam quidem nemo corrupti nostrum ut beatae iste laudantium, fuga nam aspernatur. Maiores, ab!
      Animi eum perferendis assumenda nulla dolores veritatis recusandae placeat aperiam officia. Sit, necessitatibus quidem tempore dolore asperiores officia officiis dolorem? Distinctio nostrum assumenda non quibusdam magni sapiente iste, architecto fugit?
      Natus est ipsum inventore impedit hic. Nihil fuga est quam aliquam quas dicta sunt, iste ex reprehenderit quae ullam illo deleniti mollitia delectus dolor officiis tempora culpa nobis quos rem.
      Porro, eveniet! Corporis sint dicta iste culpa vero recusandae repudiandae eaque reprehenderit, facilis deleniti quis ea omnis earum adipisci debitis nostrum tenetur molestias qui incidunt exercitationem explicabo vitae laborum. Illo?
      Velit nisi dolore iste ipsum harum, fugit, odio quidem cum maxime modi autem facere earum pariatur voluptatem tempora laborum numquam fugiat sint consequuntur. Nihil, expedita! Illum perferendis reiciendis similique quisquam.
      Voluptas temporibus eligendi laborum placeat, ullam ea necessitatibus adipisci velit earum in mollitia asperiores quia sint vero totam possimus inventore enim, voluptatem impedit autem odio! Inventore animi libero dolore dolorum!
      Sequi accusamus dolor numquam, quasi nam temporibus voluptatibus doloribus harum minus tempora laborum, eum fuga nisi libero eos, earum autem expedita quibusdam excepturi deleniti voluptatem vero? Fugit sunt maiores mollitia?
      Ducimus autem quasi numquam? Magni minus quia doloremque ducimus, incidunt quis reprehenderit ut voluptas nulla provident, id cum eligendi sint nihil facilis autem, accusantium dolor voluptatibus eum! Ex, nesciunt quod?
      Atque modi animi ducimus quisquam eum, in culpa ad sunt, corrupti, consequatur ut dolorum hic ab vitae repellat eos! Ratione reprehenderit, rerum soluta alias modi facere placeat doloribus maiores tempora.
      Excepturi ullam molestiae fuga neque. Quia ratione eaque omnis provident impedit! Quisquam dolorem odio repellendus quaerat vel doloremque doloribus nam corrupti corporis deleniti iure voluptatibus dolore, magni quod cumque dolor!
      Rem tempora veniam dolorum aperiam ullam soluta autem eveniet totam ipsa at, assumenda beatae modi ipsum hic ducimus nesciunt, ab alias! Consequuntur, dolor beatae cum exercitationem praesentium nemo est pariatur?
      Deleniti est in quis, eius tempora, molestiae soluta officia atque necessitatibus aspernatur illum aliquam mollitia omnis aut! Temporibus quasi explicabo unde officiis eligendi rerum, sapiente error repudiandae quo dolores impedit.
      Id dolorum suscipit dolore quisquam odio accusamus laudantium ex quas incidunt. Harum doloribus necessitatibus minus illo consequuntur adipisci placeat labore alias itaque modi velit sit recusandae perspiciatis, saepe a vel!
      Exercitationem minima soluta, porro molestias accusamus error mollitia libero similique vel, quae quas laborum cumque omnis quam possimus nesciunt at tempora in! Voluptas, voluptatum facere? Modi obcaecati tempore ea veritatis!
      Iste necessitatibus pariatur aliquid aliquam atque eum rem possimus fugit ullam impedit fuga dignissimos sequi praesentium doloribus, tempore commodi, dolor recusandae voluptates culpa repudiandae voluptas id. Quae dolor quis doloribus.</p>
    </div>
  );
}

export default UseWindowScrollDemo;