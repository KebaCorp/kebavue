<template>
  <kv-flex column class="pgb-3">

    <!--Toolbar-->
    <kv-flex-item>
      <kv-toolbar>

        <!--Logo-->
        <kv-toolbar-logo
          :to="{ name: 'main' }"
          text="KebaVue"
        />

        <kv-flex-spacer/>

        <!--Input-->
        <kv-toolbar-item>
          <kv-input></kv-input>
        </kv-toolbar-item>

        <!--Button-->
        <kv-toolbar-item>
          <kv-button>Toolbar Button</kv-button>
        </kv-toolbar-item>

      </kv-toolbar>
    </kv-flex-item>

    <!--Breadcrumbs-->
    <kv-flex-item class="pg-2">
      <kv-breadcrumbs :items="breadcrumbs"/>
    </kv-flex-item>

    <!--Buttons-->
    <kv-flex-item class="pg-2">

      <!--Buttons-->
      <kv-button-group separated>
        <kv-button
          v-for="i in 10"
          :key="i"
        >
          Button {{ i }}
        </kv-button>
      </kv-button-group>
    </kv-flex-item>

    <!--Buttons group-->
    <kv-flex-item class="pg-2">
      <kv-button-group>
        <kv-button
          v-for="i in 10"
          :key="i"
        >
          Button {{ i }}
        </kv-button>
      </kv-button-group>
    </kv-flex-item>

    <!--List dotted-->
    <kv-flex-item class="pg-2">
      <kv-list-dotted
        v-for="(dottedDatum, index) in dottedData"
        :key="index"
      >
        <template slot="header">
          <h1>{{ dottedDatum.header }}</h1>
        </template>
        <kv-list-dotted-item
          v-for="i in 15"
          :key="i"
        >
          <template slot="left">
            Left data {{ i }}
          </template>
          <template slot="right">
            Right data {{ i }}
          </template>
        </kv-list-dotted-item>
      </kv-list-dotted>
    </kv-flex-item>

    <!--Message-->
    <kv-flex-item class="pg-2">
      <kv-message header="Message header">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt inventore libero nemo omnis pariatur sit
        suscipit unde veritatis? Debitis earum iusto nihil non nostrum omnis provident quod repellendus reprehenderit,
        voluptatum.
      </kv-message>
    </kv-flex-item>

    <!--Tab-->
    <kv-flex-item class="pg-2">
      <kv-tab :items="breadcrumbs">
        <kv-flex class="pg-3">
          <kv-flex-item>
            Content
          </kv-flex-item>
        </kv-flex>
      </kv-tab>
    </kv-flex-item>

    <!--Table-->
    <kv-flex-item class="pg-2">
      <kv-table class="box-shadow-12">
        <kv-table-head>
          <kv-table-tr>
            <kv-table-td
              v-for="tableTitle in tableTitles"
              :key="tableTitle.value"
            >
              {{ tableTitle.value }}
            </kv-table-td>
          </kv-table-tr>
        </kv-table-head>
        <kv-table-body>
          <kv-table-tr
            v-for="tableItem in tableItems"
            :key="tableItem.id"
          >
            <kv-table-td
              v-for="(tableColumn, index) in tableItem"
              :key="index"
            >
              {{ tableColumn }}
            </kv-table-td>
          </kv-table-tr>
        </kv-table-body>
      </kv-table>
    </kv-flex-item>

    <!--Pagination-->
    <kv-flex-item class="pg-2">
      <kv-pagination
        :count="200"
        :limit="10"
        :offset="11"
      />
    </kv-flex-item>

  </kv-flex>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
    breadcrumbs: [
      {
        text: 'Main',
        to: { name: 'main' }
      },
      {
        text: 'Parent Page 1',
        to: { name: 'main' }
      },
      {
        text: 'Parent Page 2'
      },
      {
        text: 'Parent Page 3',
        to: { name: 'main' },
        disabled: true
      },
      {
        text: 'Active Page',
        to: { name: 'main' },
        isActivePage: true
      }
    ],
    dottedData: [
      {
        header: 'List header 1'
      },
      {
        header: 'List header 2'
      }
    ],
    tableTitles: [
      {
        value: 'ID'
      },
      {
        value: 'Name'
      },
      {
        value: 'Is active'
      },
      {
        value: 'Age'
      }
    ],
    tableItems: [
      {
        id: 1,
        name: 'Brad',
        isActive: 'No',
        age: 50
      },
      {
        id: 2,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 3,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 4,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 5,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 6,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 7,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 8,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 9,
        name: 'John',
        isActive: 'Yes',
        age: 60
      },
      {
        id: 10,
        name: 'John',
        isActive: 'Yes',
        age: 60
      }
    ]
  })
}
</script>

<style scoped>

</style>
