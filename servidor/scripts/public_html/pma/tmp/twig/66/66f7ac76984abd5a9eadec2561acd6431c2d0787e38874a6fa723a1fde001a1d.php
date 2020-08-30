<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* server/status/variables/index.twig */
class __TwigTemplate_71f861ae9d4e765e9e4acf3078ba48d1157994b6dfafc271d02cdde1d08522e6 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "server/status/base.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 2
        $context["active"] = "variables";
        // line 1
        $this->parent = $this->loadTemplate("server/status/base.twig", "server/status/variables/index.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 4
        echo "
";
        // line 5
        if (($context["is_data_loaded"] ?? null)) {
            // line 6
            echo "  <fieldset id=\"tableFilter\">
    <legend>";
            // line 7
            echo _gettext("Filters");
            echo "</legend>
    <form action=\"server_status_variables.php\" method=\"post\">
      ";
            // line 9
            echo PhpMyAdmin\Url::getHiddenInputs();
            echo "

      <input class=\"btn btn-secondary\" type=\"submit\" value=\"";
            // line 11
            echo _gettext("Refresh");
            echo "\">

      <div class=\"formelement\">
        <label for=\"filterText\">";
            // line 14
            echo _gettext("Containing the word:");
            echo "</label>
        <input name=\"filterText\" type=\"text\" id=\"filterText\" value=\"";
            // line 15
            echo twig_escape_filter($this->env, ($context["filter_text"] ?? null), "html", null, true);
            echo "\">
      </div>

      <div class=\"formelement\">
        <input type=\"checkbox\" name=\"filterAlert\" id=\"filterAlert\"";
            // line 19
            echo ((($context["is_only_alerts"] ?? null)) ? (" checked") : (""));
            echo ">
        <label for=\"filterAlert\">
          ";
            // line 21
            echo _gettext("Show only alert values");
            // line 22
            echo "        </label>
      </div>

      <div class=\"formelement\">
        <select id=\"filterCategory\" name=\"filterCategory\">
          <option value=\"\">";
            // line 27
            echo _gettext("Filter by category…");
            echo "</option>
          ";
            // line 28
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["categories"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["category"]) {
                // line 29
                echo "            <option value=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "id", [], "any", false, false, false, 29), "html", null, true);
                echo "\"";
                echo ((twig_get_attribute($this->env, $this->source, $context["category"], "is_selected", [], "any", false, false, false, 29)) ? (" selected") : (""));
                echo ">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["category"], "name", [], "any", false, false, false, 29), "html", null, true);
                echo "</option>
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['category'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 31
            echo "        </select>
      </div>

      <div class=\"formelement\">
        <input type=\"checkbox\" name=\"dontFormat\" id=\"dontFormat\"";
            // line 35
            echo ((($context["is_not_formatted"] ?? null)) ? (" checked") : (""));
            echo ">
        <label for=\"dontFormat\">
          ";
            // line 37
            echo _gettext("Show unformatted values");
            // line 38
            echo "        </label>
      </div>
    </form>
  </fieldset>

  <div id=\"linkSuggestions\" class=\"defaultLinks hide\">
    <p class=\"notice\">
      ";
            // line 45
            echo _gettext("Related links:");
            // line 46
            echo "      ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["links"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["link"]) {
                // line 47
                echo "        <span class=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["link"], "name", [], "any", false, false, false, 47), "html", null, true);
                echo "\">
          ";
                // line 48
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["link"], "links", [], "any", false, false, false, 48));
                foreach ($context['_seq'] as $context["link_name"] => $context["link_url"]) {
                    // line 49
                    echo "            ";
                    if (($context["link_name"] == "doc")) {
                        // line 50
                        echo "              ";
                        echo PhpMyAdmin\Util::showMySQLDocu($context["link_url"]);
                        echo "
            ";
                    } else {
                        // line 52
                        echo "              <a href=\"";
                        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["link_url"], "url", [], "any", false, false, false, 52), "html", null, true);
                        echo "\" data-post=\"";
                        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["link_url"], "params", [], "any", false, false, false, 52), "html", null, true);
                        echo "\">";
                        echo twig_escape_filter($this->env, $context["link_name"], "html", null, true);
                        echo "</a>
            ";
                    }
                    // line 54
                    echo "            |
          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['link_name'], $context['link_url'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 56
                echo "        </span>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['link'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 58
            echo "    </p>
  </div>

  <div class=\"responsivetable\">
    <table class=\"data noclick\" id=\"serverstatusvariables\">
      <colgroup>
        <col class=\"namecol\">
        <col class=\"valuecol\">
        <col class=\"descrcol\">
      </colgroup>
      <thead>
        <tr>
          <th>";
            // line 70
            echo _gettext("Variable");
            echo "</th>
          <th>";
            // line 71
            echo _gettext("Value");
            echo "</th>
          <th>";
            // line 72
            echo _gettext("Description");
            echo "</th>
        </tr>
      </thead>
      <tbody>
        ";
            // line 76
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["variables"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["variable"]) {
                // line 77
                echo "          <tr";
                if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, $context["variable"], "class", [], "any", false, false, false, 77))) {
                    echo " class=\"s_";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["variable"], "class", [], "any", false, false, false, 77), "html", null, true);
                    echo "\"";
                }
                echo ">
            <th class=\"name\">
              ";
                // line 79
                echo twig_escape_filter($this->env, twig_replace_filter(twig_get_attribute($this->env, $this->source, $context["variable"], "name", [], "any", false, false, false, 79), ["_" => " "]), "html", null, true);
                echo "
              ";
                // line 80
                echo twig_get_attribute($this->env, $this->source, $context["variable"], "doc", [], "any", false, false, false, 80);
                echo "
            </th>

            <td class=\"value\">
              <span class=\"formatted\">
                ";
                // line 85
                if (twig_get_attribute($this->env, $this->source, $context["variable"], "has_alert", [], "any", false, false, false, 85)) {
                    // line 86
                    echo "                  <span class=\"";
                    echo ((twig_get_attribute($this->env, $this->source, $context["variable"], "is_alert", [], "any", false, false, false, 86)) ? ("attention") : ("allfine"));
                    echo "\">
                ";
                }
                // line 88
                echo "
                ";
                // line 89
                if ((is_string($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = twig_get_attribute($this->env, $this->source, $context["variable"], "name", [], "any", false, false, false, 89)) && is_string($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 = "%") && ('' === $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 || $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 === substr($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4, -strlen($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144))))) {
                    // line 90
                    echo "                  ";
                    echo twig_escape_filter($this->env, PhpMyAdmin\Util::formatNumber(twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 90), 0, 2), "html", null, true);
                    echo " %
                ";
                } elseif (twig_in_filter("Uptime", twig_get_attribute($this->env, $this->source,                 // line 91
$context["variable"], "name", [], "any", false, false, false, 91))) {
                    // line 92
                    echo "                  ";
                    echo twig_escape_filter($this->env, PhpMyAdmin\Util::timespanFormat(twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 92)), "html", null, true);
                    echo "
                ";
                } elseif ((twig_get_attribute($this->env, $this->source,                 // line 93
$context["variable"], "is_numeric", [], "any", false, false, false, 93) && (twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 93) >= 1000))) {
                    // line 94
                    echo "                  <abbr title=\"";
                    echo twig_escape_filter($this->env, PhpMyAdmin\Util::formatNumber(twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 94), 0), "html", null, true);
                    echo "\">
                    ";
                    // line 95
                    echo twig_escape_filter($this->env, PhpMyAdmin\Util::formatNumber(twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 95), 3, 1), "html", null, true);
                    echo "
                  </abbr>
                ";
                } elseif (twig_get_attribute($this->env, $this->source,                 // line 97
$context["variable"], "is_numeric", [], "any", false, false, false, 97)) {
                    // line 98
                    echo "                  ";
                    echo twig_escape_filter($this->env, PhpMyAdmin\Util::formatNumber(twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 98), 3, 1), "html", null, true);
                    echo "
                ";
                } else {
                    // line 100
                    echo "                  ";
                    echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 100), "html", null, true);
                    echo "
                ";
                }
                // line 102
                echo "
                ";
                // line 103
                if (twig_get_attribute($this->env, $this->source, $context["variable"], "has_alert", [], "any", false, false, false, 103)) {
                    // line 104
                    echo "                  </span>
                ";
                }
                // line 106
                echo "              </span>
              <span class=\"original hide\">
                ";
                // line 108
                if (twig_get_attribute($this->env, $this->source, $context["variable"], "has_alert", [], "any", false, false, false, 108)) {
                    // line 109
                    echo "                  <span class=\"";
                    echo ((twig_get_attribute($this->env, $this->source, $context["variable"], "is_alert", [], "any", false, false, false, 109)) ? ("attention") : ("allfine"));
                    echo "\">
                ";
                }
                // line 111
                echo "                ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["variable"], "value", [], "any", false, false, false, 111), "html", null, true);
                echo "
                ";
                // line 112
                if (twig_get_attribute($this->env, $this->source, $context["variable"], "has_alert", [], "any", false, false, false, 112)) {
                    // line 113
                    echo "                  </span>
                ";
                }
                // line 115
                echo "              </span>
            </td>

            <td class=\"descr\">
              ";
                // line 119
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["variable"], "description", [], "any", false, false, false, 119), "html", null, true);
                echo "
              ";
                // line 120
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["variable"], "description_doc", [], "any", false, false, false, 120));
                foreach ($context['_seq'] as $context["_key"] => $context["doc"]) {
                    // line 121
                    echo "                ";
                    if ((twig_get_attribute($this->env, $this->source, $context["doc"], "name", [], "any", false, false, false, 121) == "doc")) {
                        // line 122
                        echo "                  ";
                        echo PhpMyAdmin\Util::showMySQLDocu(twig_get_attribute($this->env, $this->source, $context["doc"], "url", [], "any", false, false, false, 122));
                        echo "
                ";
                    } else {
                        // line 124
                        echo "                  <a href=\"";
                        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["doc"], "url", [], "any", false, false, false, 124), "url", [], "any", false, false, false, 124), "html", null, true);
                        echo "\" data-post=\"";
                        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["doc"], "url", [], "any", false, false, false, 124), "params", [], "any", false, false, false, 124), "html", null, true);
                        echo "\">";
                        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["doc"], "name", [], "any", false, false, false, 124), "html", null, true);
                        echo "</a>
                ";
                    }
                    // line 126
                    echo "              ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['doc'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 127
                echo "            </td>
          </tr>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['variable'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 130
            echo "      </tbody>
    </table>
  </div>
";
        } else {
            // line 134
            echo "  ";
            echo call_user_func_array($this->env->getFilter('error')->getCallable(), [_gettext("Not enough privilege to view status variables.")]);
            echo "
";
        }
        // line 136
        echo "
";
    }

    public function getTemplateName()
    {
        return "server/status/variables/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  391 => 136,  385 => 134,  379 => 130,  371 => 127,  365 => 126,  355 => 124,  349 => 122,  346 => 121,  342 => 120,  338 => 119,  332 => 115,  328 => 113,  326 => 112,  321 => 111,  315 => 109,  313 => 108,  309 => 106,  305 => 104,  303 => 103,  300 => 102,  294 => 100,  288 => 98,  286 => 97,  281 => 95,  276 => 94,  274 => 93,  269 => 92,  267 => 91,  262 => 90,  260 => 89,  257 => 88,  251 => 86,  249 => 85,  241 => 80,  237 => 79,  227 => 77,  223 => 76,  216 => 72,  212 => 71,  208 => 70,  194 => 58,  187 => 56,  180 => 54,  170 => 52,  164 => 50,  161 => 49,  157 => 48,  152 => 47,  147 => 46,  145 => 45,  136 => 38,  134 => 37,  129 => 35,  123 => 31,  110 => 29,  106 => 28,  102 => 27,  95 => 22,  93 => 21,  88 => 19,  81 => 15,  77 => 14,  71 => 11,  66 => 9,  61 => 7,  58 => 6,  56 => 5,  53 => 4,  49 => 3,  44 => 1,  42 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "server/status/variables/index.twig", "/home/wolpray/public_html/pma/templates/server/status/variables/index.twig");
    }
}
