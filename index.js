const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

app.get("/data_update", (req, res) => {
  const response = {
    data: {
      defaultValuesList: {
        rows: {
          request_type: {
            value: "Actualización de datos sensibles",
          },
          company_name: {
            value: "GRUPO MIXPACK, SOCIEDAD ANONIMA",
          },
          company_nit: {
            value: "107725665",
          },
          contact_name: {
            value: "Jose Pablo Sosa",
          },
          contact_email: {
            value: "jesus.hernandez@bitsamericas.com",
          },
        },
      },
    },
    config: {
      id: "tbo_wc_data_update_block",
      description: {
        show: true,
        value: "En esta solicitud se atenderá la actualización de datos",
      },
      footer: "",
      message: {
        empty: {
          label: "No se encontraron resultados.",
        },
        error: {
          label:
            "Se ha producido un error consultando el servicio, por favor intentarlo más tarde.",
        },
      },
      form_fields: {
        company_name: {
          label: "company_name",
          value: "Nombre de empresa",
          show: true,
          formattedValue: "Nombre de empresa",
          active: false,
          required: true,
        },
        company_nit: {
          label: "company_nit",
          value: "Número de NIT",
          show: true,
          formattedValue: "Número de NIT",
          active: false,
          required: true,
        },
        contact_name: {
          label: "contact_name",
          value: "Nombre de Contacto",
          show: true,
          formattedValue: "Nombre de Contacto",
          active: false,
          required: true,
        },
        contact_email: {
          label: "contact_email",
          value: "Correo electrónico",
          show: true,
          formattedValue: "Correo electrónico",
          active: false,
          required: true,
        },
        legal_representative: {
          label: "legal_representative",
          value: "Nombre representante legal",
          show: true,
          formattedValue: "Nombre representante legal",
          active: true,
          required: false,
        },
        legal_representative_validity: {
          label: "legal_representative_validity",
          value: "Vigencia de representante legal",
          show: true,
          formattedValue: "Vigencia de representante legal",
          active: true,
          required: false,
        },
        contact_identifier: {
          label: "contact_identifier",
          value: "DPI / pasaporte representante legal",
          show: true,
          formattedValue: "DPI / pasaporte representante legal",
          active: true,
          required: false,
        },
        allowed_file_extension: {
          extensions: ".pdf,.jpeg",
          size: "5",
        },
        attached_files: {
          field_list: {
            letter: {
              label: "Representación legal",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
          },
        },
      },
      form_texts: {
        instructions_1: {
          label: "instructions_1",
          value:
            "Por favor, ingrese el detalle de los datos que necesita actualizar",
          show: true,
          formattedValue:
            "Por favor, ingrese el detalle de los datos que necesita actualizar",
        },
        instructions_2: {
          label: "instructions_2",
          value: "Para avanzar debe de haber por lo menos uno de ellos lleno",
          show: true,
          formattedValue:
            "Para avanzar debe de haber por lo menos uno de ellos lleno",
        },
        instructions_3: {
          label: "instructions_3",
          value: "Por favor, adjunte la representación legal",
          show: true,
          formattedValue: "Por favor, adjunte la representación legal",
        },
      },
      form_messages: {
        load_file_success: {
          label: "Su documento se ha cargado con éxito.",
        },
        loading_files: {
          label: "Espere un momento. Sus documentos se están adjuntando...",
        },
        load_files_success: {
          label:
            "Sus documentos se han adjuntado con éxito. Estamos generando la solicitud...",
        },
        wrong_file_extension: {
          label: "El archivo tiene una extensión no permitida.",
        },
        max_filesize_exceeded: {
          label: "El archivo supera el peso máximo permitido.",
        },
        load_file_error: {
          label:
            "Ha ocurrido un error al adjuntar el archivo en este momento, inténtelo de nuevo más tarde.",
        },
        create_ticket_success: {
          label: "Su ticket @ticked_id ha sido generado exitosamente.",
        },
      },
      provider: "tbo_zendesk_dashboard",
      variant: null,
      page: null,
      table_options: null,
      filters_options: null,
      others_display: null,
      others: null,
      title: {
        value: "Actualización de datos sensibles",
        show: true,
      },
      urlBase: "http://gt.tbo",
      actions: {
        send: {
          label: "send",
          value: "Enviar",
          url: "/",
          show: true,
          formattedValue: "Enviar",
          active: true,
        },
      },
      iconsList: {
        upload_cloud: {
          url: "http://gt.tbo/sites/tigob2bselfcare.gt/files/icon-upload_1.png",
        },
      },
    },
    meta: {
      id: "",
      docType: "nit",
      docNumber: "107725665",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1682446790,
    },
  };
  res.send(response);
});

app.get("/update_administrator", (req, res) => {
  const response = {
    data: {
      defaultValuesList: {
        rows: {
          request_type: { value: "Actualizar administrador" },
          company_name: { value: "SIDEGASA" },
          company_nit: { value: "6869211" },
          contact_name: { value: "Jesus dev Herns" },
          contact_email: { value: "jesus.hernandez@bitsamericas.com" },
          contact_telephone: { value: "+" },
        },
      },
    },
    config: {
      id: "tbo_wc_admin_update_block",
      description: {
        show: true,
        value:
          "EN ESTA SOLICITUD SE ATENDERÁ ÚNICAMENTE ACTUALIZAR ADMINISTRADOR DE TBO",
      },
      footer: "",
      message: {
        empty: { label: "No se encontraron resultados." },
        error: {
          label:
            "Se ha producido un error consultando el servicio, por favor intentarlo más tarde.",
        },
      },
      form_fields: {
        company_name: {
          label: "company_name",
          value: "Nombre de empresa",
          show: true,
          formattedValue: "Nombre de empresa",
          active: false,
          required: true,
        },
        company_nit: {
          label: "company_nit",
          value: "Número de NIT",
          show: true,
          formattedValue: "Número de NIT",
          active: false,
          required: true,
        },
        contact_name: {
          label: "contact_name",
          value: "Nombre de Contacto",
          show: true,
          formattedValue: "Nombre de Contacto",
          active: false,
          required: true,
        },
        contact_email: {
          label: "contact_email",
          value: "Correo electrónico",
          show: true,
          formattedValue: "Correo electrónico",
          active: false,
          required: true,
        },
        document_type: {
          label: "document_type",
          value: "Tipo de documento",
          show: true,
          formattedValue: "Tipo de documento",
          active: true,
          required: true,
          options: "dpi|DPI\r\npassport|PASAPORTE\r\nnit|NIT",
        },
        document_number: {
          label: "document_number",
          value: "Número de documento",
          show: true,
          formattedValue: "Número de documento",
          active: true,
          required: true,
        },
        full_name: {
          label: "full_name",
          value: "Nombre completo",
          show: true,
          formattedValue: "Nombre completo",
          active: true,
          required: true,
        },
        email: {
          label: "email",
          value: "Correo electrónico",
          show: true,
          formattedValue: "Correo electrónico",
          active: true,
          required: true,
        },
        phone_number: {
          label: "phone_number",
          value: "Número de teléfono",
          show: true,
          formattedValue: "Número de teléfono",
          active: true,
          required: true,
        },
        allowed_file_extension: { extensions: ".pdf,.jpeg", size: "5" },
        attached_files: {
          field_list: {
            letter: {
              label: "Representación legal",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
          },
        },
      },
      form_texts: {
        instructions_1: { text: "Por favor, no ingresar guiones", show: "1" },
        instructions_2: {
          text: "Por favor, adjunte la representación legal",
          show: "1",
        },
      },
      form_messages: {
        load_file_success: { label: "Su documento se ha cargado con éxito." },
        loading_files: {
          label: "Espere un momento. Sus documentos se están adjuntando...",
        },
        load_files_success: {
          label:
            "Sus documentos se han adjuntado con éxito. Estamos generando la solicitud...",
        },
        wrong_file_extension: {
          label: "El archivo tiene una extensión no permitida.",
        },
        max_filesize_exceeded: {
          label: "El archivo supera el peso máximo permitido.",
        },
        load_file_error: {
          label:
            "Ha ocurrido un error al adjuntar el archivo en este momento, inténtelo de nuevo más tarde.",
        },
        create_ticket_success: {
          label: "Su ticket @ticked_id ha sido generado exitosamente.",
        },
      },
      provider: "tbo_zendesk_dashboard",
      variant: null,
      page: null,
      table_options: null,
      filters_options: null,
      others_display: null,
      others: null,
      title: { value: "Actualizar administrador", show: true },
      urlBase: "http://b2bselfcare.gt",
      actions: {
        send: {
          label: "send",
          value: "Enviar",
          url: "/",
          show: true,
          formattedValue: "Enviar",
          active: true,
        },
      },
      iconsList: { upload_cloud: { url: "http://b2bselfcare.gt" } },
    },
    meta: {
      id: "",
      docType: "nit",
      docNumber: "6869211",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1683110572,
    },
  };
  res.send(response);
});

app.get("/payment", (req, res) => {
  const response = {
    data: {
      bilings: [
        {
          balance: { dueAmount: "0", dueDate: null },
          account: "19046256",
          type: "FIJO",
          affiliate: {
            tokenId: "18359",
            paymentToken: 54686,
            maskedCreditCardNumber: "**** **** **** 1111",
            expiration: "12/25",
            label: "Visa",
            icon: "http://tbo-convergent.com/sites/tigob2bselfcare.pa/files/credit_cards/Visa_0.png",
            serviceType: "home",
          },
          unsuscribe: true,
          companyNit: "2074079-1-752022-D.V.34",
        },
        {
          balance: {
            dueAmount: 2003.03,
            dueDate: "2023-06-02T23:59:59.000-05:00",
          },
          account: "3022714",
          type: "MOVIL",
          affiliate: true,
          unsuscribe: false,
          companyNit: "2074079-1-752022",
        },
      ],
      creditCards: [
        {
          id: 54686,
          maskedCreditCardNumber: "**** **** **** 1111",
          extraValidationRequired: null,
          expiration: "12/25",
          label: "Visa",
          icon: "http://tbo-convergent.com/sites/tigob2bselfcare.pa/files/credit_cards/Visa_0.png",
        },
        {
          id: 54813,
          maskedCreditCardNumber: "**** **** **** 0062",
          extraValidationRequired: null,
          expiration: "11/26",
          label: "Visa",
          icon: "http://tbo-convergent.com/sites/tigob2bselfcare.pa/files/credit_cards/Visa_0.png",
        },
        {
          id: 55300,
          maskedCreditCardNumber: "**** **** **** 1029",
          extraValidationRequired: null,
          expiration: "11/26",
          label: "Visa",
          icon: "http://tbo-convergent.com/sites/tigob2bselfcare.pa/files/credit_cards/Visa_0.png",
        },
      ],
    },
    config: {
      id: "tbo_wc_automatic_payment_pa_block",
      description: { show: false, value: "" },
      footer: "",
      message: {
        empty: { label: "No se encontraron resultados." },
        error: {
          label:
            "En este momento no podemos obtener el resultado de su petici\u00f3n, intenta de nuevo m\u00e1s tarde.",
        },
      },
      filters_options: {
        filters_fields: {
          service_type_filter: {
            label: "service_type_filter",
            value: "Tipo de Servicio",
            show: true,
            formattedValue: "Tipo de Servicio",
            class: "2-columns",
            options: { mobile: "Movil", fixed: "Fijo" },
          },
          number_client_filter: {
            label: "number_client_filter",
            value: "Numero de Cliente",
            show: true,
            formattedValue: "Numero de Cliente",
            class: "2-columns",
            maxlength: "10",
          },
          number_account_filter: {
            label: "number_account_filter",
            value: "Numero de Cuenta",
            show: true,
            formattedValue: "Numero de Cuenta",
            class: "2-columns",
          },
          status_filter: {
            label: "status_filter",
            value: "Estado",
            show: true,
            formattedValue: "Estado",
            class: "2-columns",
            options: { affiliate: "Afiliado", not_affiliated: "No Afiliado" },
          },
        },
      },
      table_fields: {
        number_client_table: {
          label: "number_client_table",
          value: "N\u00famero de cliente",
          show: true,
          formattedValue: "N\u00famero de cliente",
        },
        type_service_table: {
          label: "type_service_table",
          value: "Tipo de servicio",
          show: true,
          formattedValue: "Tipo de servicio",
        },
        card_table: {
          label: "card_table",
          value: "Tarjeta ",
          show: true,
          formattedValue: "Tarjeta ",
        },
        unsuscribe_table: {
          label: "unsuscribe_table",
          value: "Desafiliar ",
          show: true,
          formattedValue: "Desafiliar ",
        },
      },
      form_texts: {
        automatic_debit_affiliation: {
          select_company: {
            label: "select_company",
            value: "SELECCIONE UNA EMPRESA",
            show: true,
            formattedValue: "SELECCIONE UNA EMPRESA",
          },
          title: {
            label: "title",
            value: "AFILIACI\u00d3N DE D\u00c9BITO AUTOM\u00c1TICO",
            show: true,
            formattedValue: "AFILIACI\u00d3N DE D\u00c9BITO AUTOM\u00c1TICO",
          },
          subtitle: {
            label: "subtitle",
            value: {
              value:
                "\u003Cp\u003EPuede afiliar sus servicios M\u00f3viles y Fijos y el pago de su factura se realiz\u00e1ra de manera autom\u00e1tica y segura todos los meses.La afiliaci\u00f3n de d\u00e9bito autom\u00e1tico no tiene cargos adicionales y cuenta con los m\u00e1s altos est\u00e1ndares de seguridad.El monto a afiliar est\u00e1 sujeto a cambios por servicios adicionales contratados, cambios en tasa de cambio y/o excedentes en susservicios contratados.\u003C/p\u003E\r\n",
              format: "basic_html",
            },
            show: true,
            formattedValue: {
              value:
                "\u003Cp\u003EPuede afiliar sus servicios M\u00f3viles y Fijos y el pago de su factura se realiz\u00e1ra de manera autom\u00e1tica y segura todos los meses.La afiliaci\u00f3n de d\u00e9bito autom\u00e1tico no tiene cargos adicionales y cuenta con los m\u00e1s altos est\u00e1ndares de seguridad.El monto a afiliar est\u00e1 sujeto a cambios por servicios adicionales contratados, cambios en tasa de cambio y/o excedentes en susservicios contratados.\u003C/p\u003E\r\n",
              format: "basic_html",
            },
          },
        },
        payment_methods: {
          summary: {
            label: "summary",
            value: "RESUMEN",
            show: true,
            formattedValue: "RESUMEN",
          },
          automatic_debit_services: {
            label: "automatic_debit_services",
            value: "Servicios a afiliar a debito automatico",
            show: true,
            formattedValue: "Servicios a afiliar a debito automatico",
          },
          customer_numbers_to_join: {
            label: "customer_numbers_to_join",
            value: "Numeros de cliente a afiliarse",
            show: true,
            formattedValue: "Numeros de cliente a afiliarse",
          },
          service_type: {
            label: "service_type",
            value: "Tipo se servicio:",
            show: true,
            formattedValue: "Tipo se servicio:",
          },
          payment_methods: {
            label: "payment_methods",
            value: "M\u00e9todos de Pago",
            show: true,
            formattedValue: "M\u00e9todos de Pago",
          },
          add_card: {
            label: "add_card",
            value: "A\u00f1adir nueva Tarjeta",
            show: true,
            formattedValue: "A\u00f1adir nueva Tarjeta",
          },
          card_username: {
            label: "card_username",
            value: "Nombre del titular",
            show: true,
            formattedValue: "Nombre del titular",
          },
          card_username_placeholder: {
            label: "card_username_placeholder",
            value: "Como aparece en la tarjeta",
            show: true,
            formattedValue: "Como aparece en la tarjeta",
          },
          card_number: {
            label: "card_number",
            value: "N\u00famero de la tarjeta",
            show: true,
            formattedValue: "N\u00famero de la tarjeta",
          },
          card_number_placeholder: {
            label: "card_number_placeholder",
            value: "0000 0000 0000 0000",
            show: true,
            formattedValue: "0000 0000 0000 0000",
          },
          card_expire: {
            label: "card_expire",
            value: "Fecha de vencimiento",
            show: true,
            formattedValue: "Fecha de vencimiento",
          },
          card_expire_help: {
            label: "card_expire_help",
            value: "B\u00fascala en el frente",
            show: true,
            formattedValue: "B\u00fascala en el frente",
          },
          card_code: {
            label: "card_code",
            value: "CVV/CVC",
            show: true,
            formattedValue: "CVV/CVC",
          },
          card_code_sec_placeholder: {
            label: "card_code_sec_placeholder",
            value: "000",
            show: true,
            formattedValue: "000",
          },
          card_code_sec_help: {
            label: "card_code_sec_help",
            value: "B\u00facala al reverso",
            show: true,
            formattedValue: "B\u00facala al reverso",
          },
          user_phone: {
            label: "user_phone",
            value: "Celular del titular de la tarjeta",
            show: true,
            formattedValue: "Celular del titular de la tarjeta",
          },
          card_save: {
            label: "card_save",
            value: "Guardar esta tarjeta para futuros pagos",
            show: true,
            formattedValue: "Guardar esta tarjeta para futuros pagos",
          },
        },
        confirmation_payment: {
          title: {
            label: "title",
            value: "Confirmaci\u00f3n",
            show: true,
            formattedValue: "Confirmaci\u00f3n",
          },
          affiliate_services: {
            label: "affiliate_services",
            value: "Servicios a afiliar a d\u00e9bito autom\u00e1tico:",
            show: true,
            formattedValue:
              "Servicios a afiliar a d\u00e9bito autom\u00e1tico:",
          },
          client_numbers: {
            label: "client_numbers",
            value: "N\u00fameros de cliente a afiliarse:",
            show: true,
            formattedValue: "N\u00fameros de cliente a afiliarse:",
          },
          service_type: {
            label: "service_type",
            value: "Tipo de servicio:",
            show: true,
            formattedValue: "Tipo de servicio:",
          },
          way_to_pay: {
            label: "way_to_pay",
            value: "Forma de pago:",
            show: true,
            formattedValue: "Forma de pago:",
          },
          payment_method: {
            label: "payment_method",
            value: "M\u00e9todo de pago:",
            show: true,
            formattedValue: "M\u00e9todo de pago:",
          },
          client_name: {
            label: "client_name",
            value: "Nombre:",
            show: true,
            formattedValue: "Nombre:",
          },
          card: {
            label: "card",
            value: "Tarjeta:",
            show: true,
            formattedValue: "Tarjeta:",
          },
          expiration_card: {
            label: "expiration_card",
            value: "Vencimiento:",
            show: true,
            formattedValue: "Vencimiento:",
          },
          confirmation_text: {
            label: "confirmation_text",
            value:
              "El monto a afiliar est\u00e1 sujeto a cambios por servicios adicionales contratados y/o excedentes en el consumo de sus servicios.",
            show: true,
            formattedValue:
              "El monto a afiliar est\u00e1 sujeto a cambios por servicios adicionales contratados y/o excedentes en el consumo de sus servicios.",
          },
        },
        unsubscribe_modal: {
          title_unsubscribe: {
            label: "title_unsubscribe",
            value:
              "\u00bfDesea elilinar esta afiliaci\u00f3n a pago autom\u00e1tico?",
            show: true,
            formattedValue:
              "\u00bfDesea elilinar esta afiliaci\u00f3n a pago autom\u00e1tico?",
          },
          subtitle_unsubscribe: {
            label: "subtitle_unsubscribe",
            value:
              "Al realizar esta operaci\u00f3n, se elimina de forma permanente los pagos recurrentes asignados al servicio.",
            show: true,
            formattedValue:
              "Al realizar esta operaci\u00f3n, se elimina de forma permanente los pagos recurrentes asignados al servicio.",
          },
          client_numbers: {
            label: "client_numbers",
            value: "N\u00famero de cliente:",
            show: true,
            formattedValue: "N\u00famero de cliente:",
          },
          account_numbers: {
            label: "account_numbers",
            value: "N\u00famero de cuenta:",
            show: true,
            formattedValue: "N\u00famero de cuenta:",
          },
          service_type: {
            label: "service_type",
            value: "Tipo de servicio:",
            show: true,
            formattedValue: "Tipo de servicio:",
          },
          card: {
            label: "card",
            value: "Tarjeta:",
            show: true,
            formattedValue: "Tarjeta:",
          },
        },
        success_transaction: {
          title: {
            label: "title",
            value:
              "\u00a1Ahora puede disfrutar de los beneficios de pagos autom\u00e1ticos!",
            show: true,
            formattedValue:
              "\u00a1Ahora puede disfrutar de los beneficios de pagos autom\u00e1ticos!",
          },
          subtitle: {
            label: "subtitle",
            value:
              "Cuando se realice el cobro de su factura, le enviaremos un comprobante de pago al correo electr\u00f3nico ",
            show: true,
            formattedValue:
              "Cuando se realice el cobro de su factura, le enviaremos un comprobante de pago al correo electr\u00f3nico ",
          },
          transaccion_detail: {
            label: "transaccion_detail",
            value: "Detalle de la transacci\u00f3n",
            show: true,
            formattedValue: "Detalle de la transacci\u00f3n",
          },
          affiliate_client_number_movil: {
            label: "affiliate_client_number_movil",
            value: "N\u00famero(s) de cliente afiliado(s):",
            show: true,
            formattedValue: "N\u00famero(s) de cliente afiliado(s):",
          },
          affiliate_client_number_fixed: {
            label: "affiliate_client_number_fixed",
            value: "N\u00famero(s) de cuenta afiliado(s):",
            show: true,
            formattedValue: "N\u00famero(s) de cuenta afiliado(s):",
          },
          service_type: {
            label: "service_type",
            value: "Tipo de servicio:",
            show: true,
            formattedValue: "Tipo de servicio:",
          },
          payment_method: {
            label: "payment_method",
            value: "Metodo de pago:",
            show: true,
            formattedValue: "Metodo de pago:",
          },
          card: {
            label: "card",
            value: "Tarjeta:",
            show: true,
            formattedValue: "Tarjeta:",
          },
          expiration: {
            label: "expiration",
            value: "Vencimiento:",
            show: true,
            formattedValue: "Vencimiento:",
          },
        },
        failed_transaction: {
          title_movil: {
            label: "title_movil",
            value:
              "\u00a1No todos sus n\u00fameros de cliente fueron afiliados!",
            show: true,
            formattedValue:
              "\u00a1No todos sus n\u00fameros de cliente fueron afiliados!",
          },
          title_fixed: {
            label: "title_fixed",
            value:
              "\u00a1No todos sus n\u00fameros de cuenta fueron afiliados!",
            show: true,
            formattedValue:
              "\u00a1No todos sus n\u00fameros de cuenta fueron afiliados!",
          },
          subtitle: {
            label: "subtitle",
            value:
              "Se ha enviado una copia de la transacci\u00f3n al correo electr\u00f3nico ",
            show: true,
            formattedValue:
              "Se ha enviado una copia de la transacci\u00f3n al correo electr\u00f3nico ",
          },
        },
        partial_transaction_failed: {
          title_movil: {
            label: "title_movil",
            value:
              "\u00a1No todos sus n\u00fameros de cliente fueron afiliados!",
            show: true,
            formattedValue:
              "\u00a1No todos sus n\u00fameros de cliente fueron afiliados!",
          },
          title_fixed: {
            label: "title_fixed",
            value:
              "\u00a1No todos sus n\u00fameros de cuenta fueron afiliados!",
            show: true,
            formattedValue:
              "\u00a1No todos sus n\u00fameros de cuenta fueron afiliados!",
          },
          subtitle: {
            label: "subtitle",
            value:
              "Se ha enviado una copia de la transacci\u00f3n al correo electr\u00f3nico ",
            show: true,
            formattedValue:
              "Se ha enviado una copia de la transacci\u00f3n al correo electr\u00f3nico ",
          },
          transaccion_detail: {
            label: "transaccion_detail",
            value: "Detalle de la transacci\u00f3n",
            show: true,
            formattedValue: "Detalle de la transacci\u00f3n",
          },
          affiliate_client_number_movil: {
            label: "affiliate_client_number_movil",
            value: "N\u00famero(s) de cliente afiliado(s):",
            show: true,
            formattedValue: "N\u00famero(s) de cliente afiliado(s):",
          },
          unaffiliated_client_number_movil: {
            label: "unaffiliated_client_number_movil",
            value: "N\u00famero(s) de cliente no afiliado(s):",
            show: true,
            formattedValue: "N\u00famero(s) de cliente no afiliado(s):",
          },
          affiliate_client_number_fixed: {
            label: "affiliate_client_number_fixed",
            value: "N\u00famero(s) de cuenta afiliado(s):",
            show: true,
            formattedValue: "N\u00famero(s) de cuenta afiliado(s):",
          },
          unaffiliated_client_number_fixed: {
            label: "unaffiliated_client_number_fixed",
            value: "N\u00famero(s) de cuenta no afiliado(s):",
            show: true,
            formattedValue: "N\u00famero(s) de cuenta no afiliado(s):",
          },
          service_type: {
            label: "service_type",
            value: "Tipo de servicio:",
            show: true,
            formattedValue: "Tipo de servicio:",
          },
          payment_method: {
            label: "payment_method",
            value: "Metodo de pago:",
            show: true,
            formattedValue: "Metodo de pago:",
          },
          client_name: {
            label: "client_name",
            value: "Nombre:",
            show: true,
            formattedValue: "Nombre:",
          },
          card: {
            label: "card",
            value: "Tarjeta:",
            show: true,
            formattedValue: "Tarjeta:",
          },
          expiration: {
            label: "expiration",
            value: "Vencimiento:",
            show: true,
            formattedValue: "Vencimiento:",
          },
        },
      },
      form_messages: {
        card_number_error_msg: { label: "N\u00famero de tarjeta no permitido" },
        date_error_msg: {
          label: "Fecha no puede ser menor al d\u00eda actual.",
        },
        card_code_error_msg: {
          label: "Debe ser un n\u00famero de 3 d\u00edgitos",
        },
        card_username_error_msg: {
          label: "Nombre y apellidos son obligatorios",
        },
      },
      others_config: {
        paginate: {
          type: "number",
          title: "Paginaci\u00f3n",
          default_value: 10,
        },
      },
      provider: "tbo_billing_payment_pa",
      variant: null,
      page: null,
      table_options: null,
      others_display: null,
      others: null,
      title: { value: "Tbo Wc Automatic Payment Pa Block", show: false },
      urlBase: "http://tbo-convergent.com",
      actions: {
        table_fields: {
          clear_filter: {
            label: "clear_filter",
            value: "LIMPIAR",
            url: "",
            show: true,
            formattedValue: "LIMPIAR",
            active: true,
          },
          apply_filter: {
            label: "apply_filter",
            value: "APLICAR",
            url: "",
            show: true,
            formattedValue: "APLICAR",
            active: true,
          },
          affiliation_number_client: {
            label: "affiliation_number_client",
            value: "Afiliar Numeros De Ciente",
            url: "",
            show: true,
            formattedValue: "Afiliar Numeros De Ciente",
            active: true,
          },
          unsubscribe_card: {
            label: "unsubscribe_card",
            value: "Desafiliar Tarjeta",
            url: "",
            show: true,
            formattedValue: "Desafiliar Tarjeta",
            active: true,
          },
          affiliate_card: {
            label: "affiliate_card",
            value: "Afiliar Tarjeta",
            url: "",
            show: true,
            formattedValue: "Afiliar Tarjeta",
            active: true,
          },
          edit: {
            label: "edit",
            value: "Editar",
            url: "",
            show: true,
            formattedValue: "Editar",
            active: true,
          },
          cancel: {
            label: "cancel",
            value: "Cancelar",
            url: "",
            show: true,
            formattedValue: "Cancelar",
            active: true,
          },
          continue: {
            label: "continue",
            value: "Continuar",
            url: "",
            show: true,
            formattedValue: "Continuar",
            active: true,
          },
          back: {
            label: "back",
            value: "Regresar",
            url: "",
            show: true,
            formattedValue: "Regresar",
            active: true,
          },
          continue_card: {
            label: "continue_card",
            value: "CONTINUAR",
            url: "",
            show: true,
            formattedValue: "CONTINUAR",
            active: true,
          },
          cancel_card: {
            label: "cancel_card",
            value: "CANCELAR",
            url: "",
            show: true,
            formattedValue: "CANCELAR",
            active: true,
          },
          confirmation_accept: {
            label: "confirmation_accept",
            value: "ACEPTAR",
            url: "",
            show: true,
            formattedValue: "ACEPTAR",
            active: true,
          },
          confirmation_cancel: {
            label: "confirmation_cancel",
            value: "CANCELAR",
            url: "",
            show: true,
            formattedValue: "CANCELAR",
            active: true,
          },
          confirmation_edit: {
            label: "confirmation_edit",
            value: "EDITAR",
            url: "",
            show: true,
            formattedValue: "EDITAR",
            active: true,
          },
          confirmation_change: {
            label: "confirmation_change",
            value: "CAMBIAR",
            url: "",
            show: true,
            formattedValue: "CAMBIAR",
            active: true,
          },
          modal_unsubscribe_cancel: {
            label: "modal_unsubscribe_cancel",
            value: "CANCELAR",
            url: "",
            show: true,
            formattedValue: "CANCELAR",
            active: true,
          },
          modal_unsubscribe_accept: {
            label: "modal_unsubscribe_accept",
            value: "ACEPTAR",
            url: "",
            show: true,
            formattedValue: "ACEPTAR",
            active: true,
          },
          response_home: {
            label: "response_home",
            value: "IR AL INICIO",
            url: "",
            show: true,
            formattedValue: "IR AL INICIO",
            active: true,
          },
        },
      },
      iconsList: {
        icon_back: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net",
        },
        icon_visa: {
          url: "https://tigob2bselfcare-stg-v3-ni.tigocloud.net/themes/radix_tbo/assets/images/icon-payment/visa.svg",
        },
        icon_mastercard: {
          url: "https://tigob2bselfcare-stg-v3-ni.tigocloud.net/themes/radix_tbo/assets/images/icon-payment/mastercard.svg",
        },
        icon_card_expire: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net/sites/tigob2bselfcare.pa/files/TC_FECHA.svg",
        },
        icon_card_code_sec: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net/sites/tigob2bselfcare.pa/files/CVV.svg",
        },
        icon_add_card: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net/sites/tigob2bselfcare.pa/files/new_card.svg",
        },
        icon_delete_affiliation: {
          url: "https://tigob2bselfcare-stg-v3-ni.tigocloud.net/themes/radix_tbo/assets/images/icon-payment/papelera.svg",
        },
        icon_sort_column: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net/sites/tigob2bselfcare.pa/files/mayor-menor.svg",
        },
        icon_arrow_down: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net/sites/tigob2bselfcare.pa/files/icon_arrow_down.png",
        },
        icon_arrow_up: {
          url: "https://tigob2bselfcare-stg-v3-pa.tigocloud.net/sites/tigob2bselfcare.pa/files/icon_arrow_up.png",
        },
        icon_partial_transaction_failed: { url: "http://tbo-convergent.com" },
        icon_failed_transaction: { url: "http://tbo-convergent.com" },
        icon_success_transaction: { url: "http://tbo-convergent.com" },
        icon_filter: {
          url: "https://raw.githubusercontent.com/oscarandres16/smarttalent_front/master/filter_icon.png",
        },
        icon_unsubscribe_warning: {
          url: "https://tigob2bselfcare-stg-v3-ni.tigocloud.net/themes/radix_tbo/assets/images/icon-payment/parcial.png",
        },
      },
      termsAndConditions:
        "https://ayuda.tigo.com.pa/[hc][es][articles][9115688686227]",
      termsAndConditionsType: "url",
      termsAndConditionsText:
        "\u003Cp\u003EAceptamos tarjetas \u003Cstrong\u003EVisa\u003C/strong\u003E y \u003Cstrong\u003EMastercard\u003C/strong\u003E. El monto a pagar reflejado no incluye tus facturas manuales, el pago que realices ser\u00e1 aplicado a la factura m\u00e1s antigua. Al presionar CONTINUAR est\u00e1s aceptando los \u003Ca href=\u0027https://ayuda.tigo.com.pa/[hc][es][articles][9115688686227]\u0027 target=\u0027_blank\u0027\u003ET\u00e9rminos y Condiciones.\u003C/a\u003E\u003C/p\u003E\r\n",
      subtitle: { show: false, value: null },
    },
    meta: {
      id: "",
      docType: "ruc",
      docNumber: "2074079-1-752022-D.V.34",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1683648307,
    },
  };

  res.send(response);
});

app.post("/payment", (req, res) => {
  // const response = {
  //   email: "jesus.hernandez@bitsamericas.com",
  //   serviceType: "mobile",
  //   methodPay: "Visa",
  //   cardNumber: "0062",
  //   cardExpiration: "11/26",
  //   typeResponse: "partial_transaction_failed",
  //   linesOk: ["19046256"],
  //   linesFail: ["3022714"],
  //   status: 200,
  // };
  const response = {
    dataError: {
      statusCode: 400,
      error:
        "{\n    \u0022httpStatusCode\u0022 : 400,\n    \u0022body\u0022 : null,\n    \u0022errors\u0022: [{\u0022httpStatusCode\u0022:400,\u0022code\u0022:400,\u0022description\u0022:\u0022Invalid Request\u0022,\u0022userMessage\u0022:\u0022Missing or Invalid Credit Card Account Number\u0022,\u0022errorDetail\u0022:\u0022Invalid Credit Card number.\u0022,\u0022externalErrorCode\u0022:null}]\n}\n",
      message:
        "Se ha producido un error en el momento de registrar la tarjeta, por favor intentar m\u00e1s tarde.",
    },
  };

  res.send(response);
});

app.get("/block-sim", (req, res) => {
  const respuesta = {
    data: [
      { subscriber: 595981151957, status: true },
      { subscriber: 595985352721, status: true },
      { subscriber: 595985352724, status: false },
      { subscriber: 595985352723, status: false },
      { subscriber: 595985352725, status: false },
      { subscriber: 595985352722, status: true },
      { subscriber: 595985352726, status: false },
      { subscriber: 595985352727, status: false },
      { subscriber: 595985352728, status: false },
      { subscriber: 595985352729, status: true },
      { subscriber: 595985352730, status: false },
      { subscriber: 595985352731, status: false },
      { subscriber: 595985352732, status: false },
      { subscriber: 595985352733, status: true },
      { subscriber: 595985352734, status: false },
      { subscriber: 595985352735, status: false },
      { subscriber: 595985352736, status: true },
      { subscriber: 595985352737, status: true },
      { subscriber: 595985352738, status: true },
      { subscriber: 595985352739, status: true },
      { subscriber: 595985352740, status: false },
    ],
    config: {
      id: "tbo_wc_block_sim_block",
      description: { show: false, value: "" },
      footer: "",
      message: {
        empty: { label: "No se encontraron resultados." },
        error: {
          label:
            "En este momento no podemos obtener el resultado de su petición, intenta de nuevo más tarde.",
        },
      },
      form_texts: {
        page_texts: {
          title: {
            label: "title",
            value: "Bloqueo de SIM",
            show: true,
            formattedValue: "Bloqueo de SIM",
          },
          item_page: {
            label: "item_page",
            value: "10,20,30",
            show: true,
            formattedValue: "10,20,30",
          },
          show_text_page: {
            label: "show_text_page",
            value: "Ver",
            show: true,
            formattedValue: "Ver",
          },
          by_page: {
            label: "by_page",
            value: "por página",
            show: true,
            formattedValue: "por página",
          },
          prefix: {
            label: "prefix",
            value: "595",
            show: true,
            formattedValue: "595",
          },
        },
        filter_texts: {
          phone_number: {
            label: "phone_number",
            value: "Número de teléfono",
            show: true,
            formattedValue: "Número de teléfono",
          },
          phone_number_placeholder: {
            label: "phone_number_placeholder",
            value: "Ingresar número",
            show: true,
            formattedValue: "Ingresar número",
          },
        },
        table_texts: {
          phone_number: {
            label: "phone_number",
            value: "Número de teléfono",
            show: true,
            formattedValue: "Número de teléfono",
          },
          service_type: {
            label: "service_type",
            value: "Tipo de servicio",
            show: false,
            formattedValue: "Tipo de servicio",
          },
          line_block: {
            label: "line_block",
            value: "Bloqueo de línea",
            show: true,
            formattedValue: "Bloqueo de línea",
          },
        },
        modal_texts: {
          title: {
            label: "title",
            value: "Bloqueo de línea",
            show: true,
            formattedValue: "Bloqueo de línea",
          },
          body: {
            label: "body",
            value:
              "Seleccione la razón por la cual se realizará el bloqueo de la Línea @line",
            show: true,
            formattedValue:
              "Seleccione la razón por la cual se realizará el bloqueo de la Línea @line",
          },
        },
        transaction_success: {
          company: {
            label: "company",
            value: "Empresa",
            show: true,
            formattedValue: "Empresa",
          },
          date: {
            label: "date",
            value: "Fecha",
            show: true,
            formattedValue: "Fecha",
          },
          hour: {
            label: "hour",
            value: "hora",
            show: true,
            formattedValue: "hora",
          },
          ruc: {
            label: "ruc",
            value: "RUC",
            show: true,
            formattedValue: "RUC",
          },
          user: {
            label: "user",
            value: "Ssuario",
            show: true,
            formattedValue: "Ssuario",
          },
          description: {
            label: "description",
            value: "Descripción",
            show: true,
            formattedValue: "Descripción",
          },
          line_number: {
            label: "line_number",
            value: "Numero de línea",
            show: true,
            formattedValue: "Numero de línea",
          },
          detail: {
            label: "detail",
            value: "El usuario @user, realizó el bloqueo de la linea: @line",
            show: true,
            formattedValue:
              "El usuario @user, realizó el bloqueo de la linea: @line",
          },
        },
        transaction_failed: {
          company: {
            label: "company",
            value: "Empresa",
            show: true,
            formattedValue: "Empresa",
          },
          date: {
            label: "date",
            value: "Fecha",
            show: true,
            formattedValue: "Fecha",
          },
          hour: {
            label: "hour",
            value: "hora",
            show: true,
            formattedValue: "hora",
          },
          ruc: {
            label: "ruc",
            value: "RUC",
            show: true,
            formattedValue: "RUC",
          },
          user: {
            label: "user",
            value: "usuario",
            show: true,
            formattedValue: "usuario",
          },
          description: {
            label: "description",
            value: "Descripción",
            show: true,
            formattedValue: "Descripción",
          },
          line_number: {
            label: "line_number",
            value: "Numero de línea",
            show: true,
            formattedValue: "Numero de línea",
          },
          detail: {
            label: "detail",
            value: "No se pudo realizar el bloqueo de la línea @line",
            show: true,
            formattedValue: "No se pudo realizar el bloqueo de la línea @line",
          },
        },
      },
      form_messages: {
        message_success: { label: "El bloqueo de su línea ha sido exitoso" },
        message_failed: {
          label: "El bloqueo de su linea no se ha podido realiza",
        },
      },
      provider: "tbo_services_py",
      variant: null,
      page: null,
      table_options: null,
      filters_options: {
        filters_fields: { reasons: { options: "loss|Perdida\r\nheist|Robo" } },
      },
      others_display: null,
      others: null,
      title: { value: "Tbo Wc Block Sim Block", show: false },
      urlBase: "http://b2bselfcare.py",
      actions: {
        apply: {
          label: "apply",
          value: "Aplicar",
          url: "",
          show: true,
          formattedValue: "Aplicar",
          active: true,
        },
        clear: {
          label: "clear",
          value: "Limpiar",
          url: "",
          show: true,
          formattedValue: "Limpiar",
          active: true,
        },
        accept_modal: {
          label: "accept_modal",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
        cancel_modal: {
          label: "cancel_modal",
          value: "Cancelar",
          url: "",
          show: true,
          formattedValue: "Cancelar",
          active: true,
        },
        accept_succes: {
          label: "accept_succes",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
        accept_failed: {
          label: "accept_failed",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
      },
      iconsList: {
        icon_lock: {
          url: "https://cdn-icons-png.flaticon.com/512/44/44622.png",
        },
        icon_unlock: {
          url: "https://cdn-icons-png.flaticon.com/512/39/39734.png",
        },
        icon_lupe: {
          url: "https://raw.githubusercontent.com/oscarandres16/smarttalent_front/master/icone-loupe-bleu.png",
        },
        icon_arrow_back: {
          url: "https://cdn-icons-png.flaticon.com/512/271/271220.png",
        },
        icon_arrow_next: {
          url: "https://cdn-icons-png.flaticon.com/512/32/32213.png",
        },
        icon_sort_column: {
          url: "https://tigob2bselfcare-stg-v3-py.tigocloud.net/sites/tigob2bselfcare.py/files/filtro-mayor-menor.svg",
        },
        icon_accept_success: {
          url: "https://static-00.iconduck.com/assets.00/success-icon-512x512-y0ltx23a.png",
        },
        icon_accept_failed: {
          url: "https://www.nicepng.com/png/full/52-521935_close-white-close-button-png.png",
        },
        icon_filter_mobile: {
          url: "https://cdn-icons-png.flaticon.com/512/126/126510.png",
        },
        icon_arrow: { url: "http://b2bselfcare.py" },
      },
      subtitle: { show: false, value: null },
    },
    meta: {
      id: "",
      docType: "ruc",
      docNumber: "80025617-4",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1685027223,
    },
  };
  res.send(respuesta);
});

app.put("/block-sim", (req, res) => {
  console.log("req.body", req.body);
  const respuesta = {
    data: {
      correlationID: "1",
      status: "OK",
      code: "00000",
      codeType: "NEG",
      description: "Ejecucion exitosa",
    },
    config: [],
    meta: {
      id: "",
      docType: "ruc",
      docNumber: "80058881-9",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1685023231,
    },
  };
  setTimeout(() => {
    res.send(respuesta);
  }, 2000);
});

app.get("/change-sim", (req, res) => {
  const respuesta = {
    data: [],
    config: {
      id: "tbo_wc_change_sim_block",
      description: {
        show: false,
        value: "",
      },
      footer: "",
      message: {
        empty: {
          label: "No se encontraron resultados.",
        },
        error: {
          label:
            "En este momento no podemos obtener el resultado de su petición, intenta de nuevo más tarde.",
        },
      },
      form_texts: {
        page_texts: {
          title: {
            label: "title",
            value: "Cambiar SIM Card",
            show: true,
            formattedValue: "Cambiar SIM Card",
          },
          subtitle: {
            label: "subtitle",
            value:
              "Para realizar el cambio de su SIM Card actual, complete el siguiente dato:",
            show: true,
            formattedValue:
              "Para realizar el cambio de su SIM Card actual, complete el siguiente dato:",
          },
          box_sim_title: {
            label: "box_sim_title",
            value: "Número de SIM Card",
            show: true,
            formattedValue: "Número de SIM Card",
          },
          box_sim_placeholder: {
            label: "box_sim_placeholder",
            value: "Ingrese el número de SIM Card",
            show: true,
            formattedValue: "Ingrese el número de SIM Card",
          },
          box_sim_descrition: {
            label: "box_sim_descrition",
            value: "No debe contener menos de @character caracteres",
            show: true,
            formattedValue: "No debe contener menos de @character caracteres",
          },
        },
        modal_texts: {
          title: {
            label: "title",
            value: "Confirmación",
            show: true,
            formattedValue: "Confirmación",
          },
          body: {
            label: "body",
            value: "Desea aplicar los cambios solicitados a su línea @line",
            show: true,
            formattedValue:
              "Desea aplicar los cambios solicitados a su línea @line",
          },
        },
        transaction_success: {
          company: {
            label: "company",
            value: "Empresa",
            show: true,
            formattedValue: "Empresa",
          },
          date: {
            label: "date",
            value: "Fecha",
            show: true,
            formattedValue: "Fecha",
          },
          hour: {
            label: "hour",
            value: "hora",
            show: true,
            formattedValue: "hora",
          },
          ruc: {
            label: "ruc",
            value: "RUC",
            show: true,
            formattedValue: "RUC",
          },
          user: {
            label: "user",
            value: "Usuario",
            show: true,
            formattedValue: "Usuario",
          },
          description: {
            label: "description",
            value: "Descripción",
            show: true,
            formattedValue: "Descripción",
          },
          description_value: {
            label: "description_value",
            value: "Usuario realizo cambio de SIM Card",
            show: true,
            formattedValue: "Usuario realizo cambio de SIM Card",
          },
          line_number: {
            label: "line_number",
            value: "Número de línea",
            show: true,
            formattedValue: "Número de línea",
          },
          detail: {
            label: "detail",
            value: "Detalle",
            show: true,
            formattedValue: "Detalle",
          },
          detail_value: {
            label: "detail_value",
            value:
              "El usuario @user, realizó cambio de SIM Card: @old_sim por el nuevo número @new_sim de la linea: @line",
            show: true,
            formattedValue:
              "El usuario @user, realizó cambio de SIM Card: @old_sim por el nuevo número @new_sim de la linea: @line",
          },
        },
        transaction_failed: {
          company: {
            label: "company",
            value: "Empresa",
            show: true,
            formattedValue: "Empresa",
          },
          date: {
            label: "date",
            value: "Fecha",
            show: true,
            formattedValue: "Fecha",
          },
          hour: {
            label: "hour",
            value: "hora",
            show: true,
            formattedValue: "hora",
          },
          ruc: {
            label: "ruc",
            value: "RUC",
            show: true,
            formattedValue: "RUC",
          },
          user: {
            label: "user",
            value: "usuario",
            show: true,
            formattedValue: "usuario",
          },
          description: {
            label: "description",
            value: "Descripción",
            show: true,
            formattedValue: "Descripción",
          },
          description_value: {
            label: "description_value",
            value: "Usuario no realizo cambio de SIM Card",
            show: true,
            formattedValue: "Usuario no realizo cambio de SIM Card",
          },
          line_number: {
            label: "line_number",
            value: "Número de línea",
            show: true,
            formattedValue: "Número de línea",
          },
          detail: {
            label: "detail",
            value: "Detalle",
            show: true,
            formattedValue: "Detalle",
          },
          detail_value: {
            label: "detail_value",
            value:
              "No se pudo realizar el cambio de SIM Card: @old_sim por el nuevo número @new_sim de la linea: @line",
            show: true,
            formattedValue:
              "No se pudo realizar el cambio de SIM Card: @old_sim por el nuevo número @new_sim de la linea: @line",
          },
        },
      },
      form_messages: {
        message_success: {
          label: "El cambio de su SIM Card ha sido exitoso.",
        },
        message_failed: {
          label: "El cambio de su SIM Card no se ha podido realizar.",
        },
      },
      provider: "tbo_services_py",
      variant: null,
      page: null,
      table_options: null,
      filters_options: null,
      others_display: null,
      others: null,
      title: {
        value: "Tbo Wc Cahnge Sim Block",
        show: false,
      },
      urlBase: "http://b2bselfcare.py",
      actions: {
        apply: {
          label: "apply",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
        accept_modal: {
          label: "accept_modal",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
        cancel_modal: {
          label: "cancel_modal",
          value: "Cancelar",
          url: "",
          show: true,
          formattedValue: "Cancelar",
          active: true,
        },
        accept_succes: {
          label: "accept_succes",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
        accept_failed: {
          label: "accept_failed",
          value: "Aceptar",
          url: "",
          show: true,
          formattedValue: "Aceptar",
          active: true,
        },
      },
      iconsList: {
        icon_accept_success: {
          url: "http://b2bselfcare.py",
        },
        icon_accept_failed: {
          url: "http://b2bselfcare.py",
        },
        icon_filter_mobile: {
          url: "http://b2bselfcare.py",
        },
      },
      form_fields: {
        min_sim_character: "5",
        msg_error_validation: "Mínimo @character caracteres",
      },
      subtitle: {
        show: false,
        value: null,
      },
    },
    meta: {
      id: "",
      docType: "ruc",
      docNumber: "80058881-9",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1685659609,
    },
  };
  res.send(respuesta);
});

app.post("/change-sim", (req, res) => {
  const respuesta = {
    data: {
      correlationID: "1",
      status: "OK",
      code: "00000",
      codeType: "NEG",
      description: "Ejecucion exitosa",
      old_sim: "8959504101577954817",
    },
    config: [],
    meta: {
      id: "",
      docType: "ruc",
      docNumber: "80058881-9",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1685023231,
    },
  };
  const respuestaError = {
    data: {
      data_error: {
        statusCode: 403,
        error:
          "{\u0022error\u0022:{\u0022statusCode\u0022:\u0022403\u0022,\u0022code\u0022:\u002240001\u0022,\u0022message\u0022:\u0022PY_BR001-Estado de Activo Inv\u00e1lido: RO\u0022,\u0022developerMessage\u0022:\u0022No se pudo realizar el cambio de SIM\u0022}}",
        message: "Error al consultar la informaci\u00f3n al servicio",
        old_sim: "8959504101577954817",
      },
    },
    config: [],
    meta: {
      id: "",
      docType: "ruc",
      docNumber: "80058881-9",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1687297783,
    },
  };
  setTimeout(() => {
    res.send(respuesta);
  }, 2000);
});

app.get("/payment_management", (req, res) => {
  const response = {
    data: {
      defaultValuesList: {
        rows: {
          request_type: {
            value: "Gestión de cobro",
          },
          company_name: {
            value: "SIDEGASA",
          },
          company_nit: {
            value: "6869211",
          },
          contact_name: {
            value: "Jesus dev Herns",
          },
          contact_email: {
            value: "jesus.hernandez@bitsamericas.com",
          },
          contact_telephone: {
            value: "+",
          },
        },
      },
    },
    config: {
      id: "tbo_wc_payment_management_block",
      description: {
        show: true,
        value: "EN ESTA SOLICITUD SE ATENDERÁ ÚNICAMENTE GESTIONES DE COBRO",
      },
      footer: "",
      message: {
        empty: {
          label: "No se encontraron resultados.",
        },
        error: {
          label:
            "Se ha producido un error consultando el servicio, por favor intentarlo más tarde.",
        },
      },
      form_fields: {
        company_name: {
          label: "company_name",
          value: "Nombre de empresa",
          show: true,
          formattedValue: "Nombre de empresa",
          active: false,
          required: true,
        },
        company_nit: {
          label: "company_nit",
          value: "NIT",
          show: true,
          formattedValue: "NIT",
          active: false,
          required: true,
        },
        contact_name: {
          label: "contact_name",
          value: "Nombre de Contacto",
          show: true,
          formattedValue: "Nombre de Contacto",
          active: false,
          required: true,
        },
        contact_email: {
          label: "contact_email",
          value: "Correo electrónico",
          show: true,
          formattedValue: "Correo electrónico",
          active: false,
          required: true,
        },
        date: {
          label: "date",
          value: "Fecha",
          show: true,
          formattedValue: "Fecha",
          active: true,
          required: true,
        },
        reason_catalog: {
          label: "reason_catalog",
          value: "Catálogo de motivo de gestión",
          show: true,
          formattedValue: "Catálogo de motivo de gestión",
          active: true,
          required: true,
          options: "Cobro extra\r\nCobro duplicado\r\nNo se asignó beneficio",
        },
        service_number: {
          label: "service_number",
          value: "Ingrese el número de servicio con que tuvo el inconveniente",
          show: true,
          formattedValue:
            "Ingrese el número de servicio con que tuvo el inconveniente",
          active: true,
          required: true,
        },
        additional_comment: {
          label: "additional_comment",
          value: " Comentario adicional",
          show: true,
          formattedValue: " Comentario adicional",
          active: true,
          required: true,
        },
        allowed_file_extension: {
          extensions: ".pdf,.jpeg",
          size: "5",
        },
        attached_files: {
          field_list: {
            letter: {
              label: "Adjuntar archivo",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
          },
        },
      },
      form_texts: {
        instructions_1: {
          text: "Por favor, adjunte información de respaldo",
          show: "1",
        },
        instructions_2: {
          text: "Por favor, ingrese el detalle de la gestión que desea realizar",
          show: "1",
        },
      },
      form_messages: {
        load_file_success: {
          label: "Su documento se ha cargado con éxito.",
        },
        loading_files: {
          label: "Espere un momento. Sus documentos se están adjuntando...",
        },
        load_files_success: {
          label:
            "Sus documentos se han adjuntado con éxito. Estamos generando la solicitud...",
        },
        wrong_file_extension: {
          label: "El archivo tiene una extensión no permitida.",
        },
        max_filesize_exceeded: {
          label: "El archivo supera el peso máximo permitido.",
        },
        load_file_error: {
          label:
            "Ha ocurrido un error al adjuntar el archivo en este momento, inténtelo de nuevo más tarde.",
        },
        create_ticket_success: {
          label: "Su ticket @ticked_id ha sido generado exitosamente.",
        },
      },
      provider: "tbo_zendesk_dashboard",
      variant: null,
      page: null,
      table_options: null,
      filters_options: null,
      others_display: null,
      others: null,
      title: {
        value: "Gestión de cobro",
        show: true,
      },
      urlBase: "http://b2bselfcare.gt",
      actions: {
        send: {
          label: "send",
          value: "Enviar",
          url: "/",
          show: true,
          formattedValue: "Enviar",
          active: true,
        },
      },
      iconsList: {
        upload_cloud: {
          url: "http://b2bselfcare.gt",
        },
      },
    },
    meta: {
      id: "",
      docType: "nit",
      docNumber: "6869211",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1686088584,
    },
  };
  res.send(response);
});

app.get("/transfer_fixed_services", (req, res) => {
  const response = {
    data: {
      defaultValuesList: {
        rows: {
          request_type: {
            value: "Traslado de Servicios Fijos",
          },
          company_name: {
            value: "SIDEGASA",
          },
          company_nit: {
            value: "6869211",
          },
          contact_name: {
            value: "Jesus dev Herns",
          },
          contact_email: {
            value: "jesus.hernandez@bitsamericas.com",
          },
          contact_telephone: {
            value: "+",
          },
        },
      },
    },
    config: {
      id: "tbo_wc_transfer_fixed_services_block",
      description: {
        show: true,
        value:
          "En esta solicitud solo se atenderá únicamente el Traslado de Servicios Fijos",
      },
      footer: "",
      message: {
        empty: {
          label: "No se encontraron resultados.",
        },
        error: {
          label:
            "Se ha producido un error consultando el servicio, por favor intentarlo más tarde.",
        },
      },
      form_fields: {
        company_name: {
          label: "company_name",
          value: "Nombre de empresa",
          show: true,
          formattedValue: "Nombre de empresa",
          active: false,
          required: true,
        },
        company_nit: {
          label: "company_nit",
          value: "NIT",
          show: true,
          formattedValue: "NIT",
          active: false,
          required: true,
        },
        contact_name: {
          label: "contact_name",
          value: "Nombre de Contacto",
          show: true,
          formattedValue: "Nombre de Contacto",
          active: false,
          required: true,
        },
        contact_email: {
          label: "contact_email",
          value: "Correo electrónico",
          show: true,
          formattedValue: "Correo electrónico",
          active: false,
          required: true,
        },
        service_number: {
          label: "service_number",
          value: "Número de servicio",
          show: true,
          formattedValue: "Número de servicio",
          active: true,
          required: true,
        },
        company_name_tranfer: {
          label: "company_name_tranfer",
          value: "Nombre de la empresa a traspasar",
          show: true,
          formattedValue: "Nombre de la empresa a traspasar",
          active: true,
          required: true,
        },
        company_nit_tranfer: {
          label: "company_nit_tranfer",
          value: "No de NIT de empresa a donde se realiza el traspaso",
          show: true,
          formattedValue: "No de NIT de empresa a donde se realiza el traspaso",
          active: true,
          required: true,
        },
        contact_name_tranfer: {
          label: "contact_name_tranfer",
          value: "Nombre de contacto",
          show: true,
          formattedValue: "Nombre de contacto",
          active: true,
          required: true,
        },
        contact_number_tranfer: {
          label: "contact_number_tranfer",
          value: "Número de contacto",
          show: true,
          formattedValue: "Número de contacto",
          active: true,
          required: true,
          size: "8",
          letters: 1,
          numbers: 1,
        },
        allowed_file_extension: {
          extensions: ".pdf,.jpeg,.doc,.docx",
          size: "5",
        },
        attached_files: {
          field_list: {
            letter_0: {
              label: "Representante legal",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
            letter_1: {
              label: "DPI de representante que cede",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
            letter_2: {
              label: "DPI de representante que recibe",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
            letter_3: {
              label: "Carta cesión de servicio",
              description:
                "Extensiones de archivo permitidas: @extensions. Peso máximo @maxSize MB",
              show: true,
              active: true,
              required: true,
            },
          },
        },
      },
      form_texts: {
        instructions_1: {
          text: "Por favor, adjunte los documentos requeridos",
          show: "1",
        },
        instructions_2: {
          text: "Por favor, ingrese el detalle del servicio que necesita trasladar",
          show: "1",
        },
      },
      form_messages: {
        load_file_success: {
          label: "Sus documentos se han cargado con éxito.",
        },
        loading_files: {
          label: "Espere un momento. Sus documentos se están adjuntando...",
        },
        load_files_success: {
          label:
            "Sus documentos se han adjuntado con éxito. Estamos generando la solicitud...",
        },
        wrong_file_extension: {
          label: "El archivo tiene una extensión no permitida.",
        },
        max_filesize_exceeded: {
          label: "El archivo supera el peso máximo permitido.",
        },
        load_file_error: {
          label:
            "Ha ocurrido un error al adjuntar el archivo en este momento, inténtelo de nuevo más tarde.",
        },
        create_ticket_success: {
          label: "Su ticket @ticked_id ha sido generado exitosamente.",
        },
      },
      provider: "tbo_zendesk_dashboard",
      variant: null,
      page: null,
      table_options: null,
      filters_options: null,
      others_display: null,
      others: null,
      title: {
        value: "Traslado de Servicios Fijos",
        show: true,
      },
      urlBase: "http://b2bselfcare.gt",
      actions: {
        send: {
          label: "send",
          value: "Enviar",
          url: "/",
          show: true,
          formattedValue: "Enviar",
          active: true,
        },
      },
      iconsList: {
        upload_cloud: {
          url: "http://b2bselfcare.gt/sites/tigob2bselfcare.gt/files/icon-upload_6.png",
        },
      },
    },
    meta: {
      id: "",
      docType: "nit",
      docNumber: "6869211",
      params: [],
      businessUnit: "",
      cache: 0,
      expirationCache: 1686860011,
    },
  };
  res.send(response);
});

app.post("/transfer_fixed_services", (req, res) => {
  const token = generateRandomToken();
  const data = {
    data: {
      tokens: [token],
    },
  };
  res.send(data);
});

function generateRandomToken() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
