<template>
  <kv-flex column>

    <!--Toolbar-->
    <kv-flex-item>
      <kv-toolbar>

        <!--Logo-->
        <kv-toolbar-logo
          :to="{ name: 'main' }"
          text="KebaVue"
          image="./img/logo.png"
        />

        <kv-flex-spacer/>

        <!--Input-->
        <kv-toolbar-item>
          <kv-input></kv-input>
        </kv-toolbar-item>

        <!--Button-->
        <kv-toolbar-item>
          <kv-button>Button</kv-button>
        </kv-toolbar-item>

      </kv-toolbar>
    </kv-flex-item>

    <!--Breadcrumbs-->
    <kv-flex-item class="pg-1">
      <kv-breadcrumbs :items="breadcrumbs"/>
    </kv-flex-item>

    <!--Button-->
    <kv-flex-item class="pg-1">
      <kv-button>
        Button
      </kv-button>
    </kv-flex-item>

    <!--Table-->
    <kv-flex-item class="pg-1">
      <kv-table>
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
    <kv-flex-item class="pg-1">
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
